import Record from "../models/record.model.js";

//create record

export const createRecord=async(req,res)=>{
    try{
        const{amount,type,category,date,note}=req.body;
        if(!amount || !type || !category){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }
        const record=new Record({
            amount,
            type,
            category,
            date,
            note
        });
        await record.save();
        res.status(201).json({
            success:true,
            message:"Record creaetd"
        });
    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        });
    }
};

//get all the records 

export const getAllRecord=async(req,res)=>{
    try{
        const records=await Record.find({user:req.user._id});
            res.status(200).json({
                status:true,
                records
            });
        
    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        });
    }
};

//update record

export const updateRecord=async(req,res)=>{
    try{
        const record =await Record.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:record}
        );
        if(!record){
            return res.status(404).json({
                success:false,
                message:"record not found"

            });
        }
        res.status().json({
            success:true,
            message:"record updated"
        });
    }catch(err){
        return res.status().json({
            success:false,
            message:err.message
        });

    }
};

//delete record

export const deleteRecord=async(req,res)=>{
    try{
        const record=await findByIdAndDelete(req.params.id);
        if(!record){
            return res.status(404).json({
                success:false,
                message:"record not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"record deleted sucessfully"
        });

    }catch(err){
        return res.status().json({
            success:false,
            message:err.message
        });
    }
}