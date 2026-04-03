import express from "express";
import {login,register,getProfile} from "../controllers/auth.controller.js"
const router=express.Router();

router.post("/register",register);

router.post("/login",login);
router.get("/profile",getProfile);

export default router;