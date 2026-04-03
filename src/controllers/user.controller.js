import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

//admin only have access 

export const createUser=async(req,res)=>{
    try{
        const{name,email,password,role}=req.body;
        //validation
        if(!name || !email || !password ){
            return res.status(400).json({
                success:false,
                message:"All fields required"
            });
        }

        //if user exist or not 
        const existUser=await User.findOne({email});
        if(existUser){
           return  res.status(400).json({
                success:false,
                message:"Already user exist"
            });
        }
        const hashedPassword=await bcrypt.hash(password,10);
       const user=new User({
        name,
        email,
        password:hashedPassword,
        role
       });
      await  user.save();
      res.status(201).json({success:true,message:"User created successfully"});

        

    }catch(err){
        return res.status(500).json({success:false,message:err.message});

    }
};

//get all users 
export const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find().select("-password");
        res.status(200).json({
            success:true,
            users
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"error fetching users",
            error:error.message
        });

    }
};

//get a single user by using id 

export const getUserById=async(req,res)=>{
    try{
        const user=await User.findById(req.params.id).select("-password");
        if(!user){
            return res.status(404).json({message:"user not found"});
        }

        res.status(200).json({
            success:true,
            user
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"error fetching user",
            error:error.message
        });

    }
};

//update user

export const updateUser=async(req,res)=>{
    try{
        const data={...req.body};
        if(data.password){
            data.password=await bcrypt.hash(data.password,10);
        }
        const updateUser=await User.findByIdAndUpdate(
            req.params.id,
            data,
            {new:true}
        ).select("-password");
        if(!updateUser){
            return res.status(404).json({
                success:false,
                message:"user not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"user updated successfully",
            user:updateUser
        });
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"error updating the user",
            err:err.message
        });
    }
};

//delete user
export const deleteUser=async(req,res)=>{
    try{
        const deleteUser=await User.findByIdAndDelete(req.params.id);
        if(!deleteUser){
            return res.status(404).json({
                success:false,
                messaage:"user not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"user deleted successfully",
            user:deleteUser
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:"error deleting user",
            error:error.message
        });

    }
};