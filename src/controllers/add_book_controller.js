

exports.bookRegister_post_Controller=async(req,res)=>{

    await bookRegistration(req,res);
}

exports.bookRegister_get_Controller=async(req,res)=>{
    await countbook(req,res);
    
    // res.render("adminDashboard", {name: result.name });
    res.render('bookRegistration',{Newprimarykey: res.Newprimarykey});
}
