import express from 'express';
import {
    createRecord,
    getAllRecord,
    updateRecord,
    deleteRecord
} from "../controllers/record.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router=express.Router();

//create record
router.post("/",authMiddleware,roleMiddleware(["admin","analyst"]),createRecord);

router.get("/:id",authMiddleware,roleMiddleware(["admin","analyst","viewer"]),getAllRecord);

router.put("/:id",authMiddleware,roleMiddleware(["admin","analyst"]),updateRecord);

router.delete("/:id",authMiddleware,roleMiddleware("admin"),deleteRecord);

export default router;