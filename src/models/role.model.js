import mongoose from "mongoose";
const roleSchema=new mongoose.Schema({
    name:{
        type:String,
        enum:["viewer","analyst","admin"],
        unique:true,
    },
    permissions:[{
        type:String,
        enum:[
        "READ_DASHBOARD",
        "READ_RECORDS",
        "CREATE_RECORD",
        "UPDATE_RECORD",
        "DELETE_RECORD",
        "MANAGE_USERS"
        ]
    }]
});
export default mongoose.model("Role",roleSchema);