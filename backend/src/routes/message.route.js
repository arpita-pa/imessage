import express from "express";
import {
  getConversationsForSidebar,
  getMessages,
  getUnreadCounts,
  getUsersForSidebar,
  markMessagesAsRead,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/users", getUsersForSidebar);
router.get("/conversations", getConversationsForSidebar);
router.get("/unread", getUnreadCounts);
router.get("/:id", getMessages);
router.put("/mark-read/:id", markMessagesAsRead);
router.post("/send/:id", upload.single("media"), sendMessage);

export default router;