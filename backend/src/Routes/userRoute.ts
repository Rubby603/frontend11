import express from "express";
import { registerUser, loginUser, getUserProfile } from "../Controllers/userController";
import { authenticateJWT } from "../Middlewares/tokenMiddleware";

const router = express.Router();



router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticateJWT, getUserProfile);

export default router;
