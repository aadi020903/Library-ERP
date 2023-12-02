const { login_admin_service } = require('../services/login_admin_service.js');


exports.login_admin = async (req, res) => {
    res.render('login_admin');
}

exports.login_admin_data = async (req, res) => {
    try {
        let data = await login_admin_service(req,res);

        if(data.success){
            res.render("dashboard");
        }
        else{
            console.log("Error in login_admin_service");
        }
    }catch(error){
        console.log(error);
    }
}