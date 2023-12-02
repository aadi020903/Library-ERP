
const library_model = require("../models/library_model")
const member_model = require("../models/member_model")
exports.library_service = async (req) => {
  const memberId = req.body.memberId;

  try {
    const foundUser = await member_model.findOne({ memberId: memberId });
    if (!foundUser) {
      return {
        success: false,
        data: [],
        message: "Student not found",
      };
    }
    console.log(foundUser);

    const feeStatus = foundUser.feestatus;
 
    const transactionid = foundUser._id;
    console.log(transactionid);
    
    if(feeStatus==false){
      return {
        success: false,
        data: [],
        message: "fee not paid",
      };
    }


    const newBook = {
      issuedId: req.body.bookId,
      ISBN:req.body.ISBN,
    };
    console.log(transactionid);
    let newdata = await library_model.findOneAndUpdate(
      { memberId: req.body.memberId },
      {
        $set: { feeStatus: feeStatus },
        $set: { transactionId: transactionid },
        $push: { browsingHistory: newBook },
      },
      { new: true, upsert: true }
    );
    console.log(newdata);

    if (!newdata) {
      return {
        success: false,
        data: [],
        message: "data not saved",
      };
    }

    return {
      success: true,
      data: newdata,
      message: "data saved",
    };
  } catch (error) {
    console.log("library service mei", error);
  }
};
