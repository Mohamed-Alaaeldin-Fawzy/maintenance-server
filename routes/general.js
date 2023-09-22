import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getUser } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", verifyToken, getUser);

export default router;
