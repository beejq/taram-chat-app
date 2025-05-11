import express from "express";
import { signup, login, logout, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/signup", signup); //Creating account
router.post("/login", login); //Logging in account
router.post("/logout", logout); //Logging out account

//Before updating profile, protectRoute verifies if user has a token, after verifying updateProfile is called (Changing profile picture)
router.put("/update-profile", protectRoute, updateProfile);

//Checking Authenticated Users
router.get("/check", protectRoute, checkAuth)

export default router;