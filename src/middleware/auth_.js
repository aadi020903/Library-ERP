const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");



function checkAuthenticated(req, res, next) {
    const token = req.cookies.token;
    try {
      if (!token && req.originalUrl !== "/api/login_admin") {
          return res.redirect("/api/login_admin");
      }
 
      // Verify the token
      jwt.verify(token, process.env.JWT_SECRET , function(err, decoded) {
        if (err) {
          // If the token is not valid, redirect to the login page
          return res.redirect("/api/login_admin");
        } else {
          // If the token is valid, save the decoded user info in req.user and call next()
          req.user = decoded;
          next();
        }
      });
    } catch (error) {
     console.log(error+"error in checkAuthenticated");
    }
 }



module.exports = checkAuthenticated;