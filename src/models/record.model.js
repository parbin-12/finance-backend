import mongoose from "mongoose";

const userRecord=new mongoose.Schema({
    amount:{
        type:Number,
        required:true,

    },
    type:{
        type:String,
        enum:["income","expenses"],
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    note:{
        type:String,

    },
},{timestamps:true});

export default mongoose.model("Record",userRecord);