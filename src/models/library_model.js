
const mongoose = require('mongoose');
const LIBRARY_COLLECTION = process.env.DB_COLLECTION_LIBRARY;

const browsingHistorySchema = new mongoose.Schema({
    issuedId: {
        type: String,
        required: true
    },
    ISBN:{
        type:String,
        required:true
    },
    issuedDate: {
        type: Date,
        default: Date.now
    },
    returnDate: {
        type: Date,
        default: function() {
            const returnDate = new Date();
            returnDate.setDate(returnDate.getDate() + 15);
            return returnDate;
        }
    }
})

const librarySchema = new mongoose.Schema({
    memberId: {
        type: String,
        required: true
    },
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
     
    },
    feeStatus: {
        type: Boolean,
        default: true
    },
    browsingHistory: [browsingHistorySchema]
}, { timestamps: true });


module.exports  = mongoose.model(LIBRARY_COLLECTION, librarySchema);
