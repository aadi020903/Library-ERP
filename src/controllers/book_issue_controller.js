const { library_service } = require('../services/library_service');


exports.book_issue =async (req, res) => {
    res.render('book_issue');
}

exports.book_issue_data= async   (req, res) => {
    // let data=await library_service(req);
    // if(data.success){
    //     const dataa=data.data;
    //     res.status(201).json(dataa);
    //     console.log(data.message);
    // }
    // if(!data.success){
    //     const dataa=data.data;
    //     res.status(404).json(dataa);
    //     console.log(data.message);
    // }
    try {
        let data = await library_service(req);

        if(data.success){
            res.render("dashboard");
            console.log(data.message);
            console.log(data.data);
        }
        else{
            console.log("Error in member_service");
        }
    }catch(error){
        console.log(error+"hiii");
    }
}
