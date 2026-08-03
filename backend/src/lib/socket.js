import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173";

const io = new Server(server, {
  cors: {
    origin: [allowedOrigin],
  },
});

// userId -> socketId
const userSocketMap = {};

function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

io.on("connection", (socket) => {
  console.log("✅ Socket connected:", socket.id);

  const userId = socket.handshake.query.userId;

  console.log("User ID:", userId);

  if (userId && userId !== "undefined" && userId !== "null") {
    userSocketMap[userId] = socket.id;
  }

  console.log("Online users:", Object.keys(userSocketMap));

  // Send updated online users list
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);

    if (userId && userSocketMap[userId] === socket.id) {
      delete userSocketMap[userId];
    }

    console.log("Online users:", Object.keys(userSocketMap));
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, server, io, getReceiverSocketId };