require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./src/routers/routes')
const issue_router = require('./src/routers/book_issue_route')
const cookieParser = require('cookie-parser');
const admin_router = require('./src/routers/register_admin')
const add_book_router = require('./src/routers/add_books')
const login_admin_router = require('./src/routers/login_admin')
const {db_connect_library}= require('./database/database');
const checkAuthenticated = require("./src/middleware/auth_");
db_connect_library();

const path = require("path");

app.use("/public",express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// app.use(checkAuthenticated);
app.use('/api', issue_router);
app.use('/api', router);
app.use('/api', admin_router);
app.use('/api', login_admin_router);
app.use('/api', add_book_router);

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.set("views", path.join(__dirname, "src/views"));





app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});