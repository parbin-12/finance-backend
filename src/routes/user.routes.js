import express from "express";

import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

import roleMiddleware from "../middleware/role.middleware.js";

const router=express.Router();

//create user

router.post("/",authMiddleware,roleMiddleware(["admin"]),createUser);

//get all user

router.get("/",authMiddleware,roleMiddleware(["admin"]),getAllUsers);

//get user by id
router.get("/:id",authMiddleware,roleMiddleware(["admin"]),getUserById);

//update user

router.put("/:id",authMiddleware,roleMiddleware(["admin"]),updateUser);

//delete user
router.delete("/:id",authMiddleware,roleMiddleware(["admin"]),deleteUser);

export default router;