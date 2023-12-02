const {
    member_service,
} = require('../../src/services/member_service');

exports.add_service = async (req, res) => {
    res.render('add_service');
}

exports.member_service = async (req, res) => {
    try {
        let data = await member_service(req);

        if(data.success){
            res.render("dashboard");
        }
        else{
            console.log("Error in member_service");
        }
    }catch(error){
        console.log(error);
    }
}