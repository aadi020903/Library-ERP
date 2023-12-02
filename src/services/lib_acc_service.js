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

    const paidAmount = foundUser.paidAmount;
    const totalAmount = foundUser.totalAmount;
    let amounts = totalAmount / 4;
    const transactionid = foundUser._id;
    console.log(transactionid);
    let feeStatus = true;
    if (paidAmount < amounts) {
      feeStatus = false;
    }

    const newBook = {
      bookId: req.body.bookId,
    };
    console.log(transactionid);
    let newdata = await library_model.findOneAndUpdate(
      { studentId: req.body.sid },
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
