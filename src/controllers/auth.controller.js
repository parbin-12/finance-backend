import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//register
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "viewer", 
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login 
export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        //validation of login 
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Email and password are required"
            });
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"invalid credentials"
            });   
        }

        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({success:false,message:"invalid credentials"});
        }

        const token=jwt.sign(
            {
                id:user._id,
                role:user.role,
            },
            process.env.JWT_SECRET,{
                expiresIn:"1d"
            }
        );
        res.json({success:true,token});

    }catch(err){
        return res.status(500).json({success:false,message:err.message});

    }
};

export const getProfile=async(req,res)=>{
   res.status(200).json({
    success:true,
    user:{
        id:req.user._id,
        name:req.user.name,
        email:req.user.email,
        role:req.user.role
    }
   });
};