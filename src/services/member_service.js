const member_model = require('../models/member_model');

exports.member_service = async (req, res) => {

    try {
        const count = await member_model.countDocuments(); // Count the number of documents in the collection
        sidCounter = count + 1; // Increment the counter by 1
    
        let memberId = `MEMBER00${sidCounter}`;

        console.log("Hello",req.body.name);

        let member = new member_model({
          
            memberId: memberId,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            aadharCard: req.body.aadharCard,
               });
               console.log(member);
        let result = await member.save();
        if (result) {
            return{
              message: "Member created successfully",
              data: result,
              success:true,
            }

          };
        
    } catch (error) {
        console.log(""+error +"0");
    }
}