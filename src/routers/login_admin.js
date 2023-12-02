const express = require('express');
const login_admin_router = express.Router();
const {
    login_admin,
    login_admin_data
} = require('../controllers/login_admin_controller.js');



login_admin_router.get('/login_admin', login_admin)
login_admin_router.post('/login_admin_data', login_admin_data);


module.exports = login_admin_router;

