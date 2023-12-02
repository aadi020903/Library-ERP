const mongoose = require("mongoose");

const member_collection = process.env.DB_COLLECTION_MEMBER;

const member_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    memberId: {
        type: String,
        required: true,
    },
    aadharCard: {
        
            type: String,
            required: true,
            minlength: 12,
            maxlength: 12,
        
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    feestatus: {
      type:Boolean,
        default: true,
    },
    due:{
        type:Number,
            default: 0,
    }
    },{ timestamps: true});

module.exports = mongoose.model(member_collection, member_schema);
