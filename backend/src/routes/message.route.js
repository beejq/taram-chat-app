import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
import { getMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar); //Getting all registered users

router.post("/send/:id", protectRoute, sendMessage); //Sending message to a specific user
router.get("/:id", protectRoute, getMessages); //Getting all messages


export default router;