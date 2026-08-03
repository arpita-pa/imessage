# 💬 iMessage Web - Real-Time Chat Application

A full-stack, real-time messaging platform inspired by iMessage. Built with Node.js, Express, MongoDB, Socket.IO, and React, this application features instant messaging, media sharing, live user presence, custom theme customization, and secure real-time message management.

🚀 **Live Demo:** [https://imessage-h94q.onrender.com](https://imessage-h94q.onrender.com)  
📂 **GitHub Repository:** [https://github.com/arpita-pa/imessage](https://github.com/arpita-pa/imessage)

---

## ✨ Features

- ⚡ **Real-Time Messaging:** Instant delivery using WebSockets (`Socket.IO`).
- 🔔 **Unread Message Badges:** Live unread count tracking per conversation that updates and clears automatically when read.
- 🗑️ **Authorized Real-Time Message Deletion:** Secure message removal with sender validation and live deletion across active sessions.
- 🟢 **Live User Presence:** Tracks online/offline status of users in real time.
- 🖼️ **Media Sharing:** Fast and smooth image/video uploads integrated with ImageKit.
- 🔐 **Authentication:** Secure user sign-up and login using Clerk with Webhook synchronization.
- 🎨 **Custom Themes & Wallpapers:** Light/Dark modes, multiple color accents, and customizable chat backgrounds.
- ⌨️ **Sound Effects:** Optional UI audio feedback for sending/receiving messages.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React.js (Vite)
- **State Management:** Zustand (with local persistence)
- **Styling:** Tailwind CSS, Hero UI
- **Icons & Toast:** Lucide React, React Hot Toast
- **Authentication:** Clerk

### **Backend**
- **Runtime:** Node.js & Express.js
- **Database:** MongoDB & Mongoose ORM
- **Real-Time Protocol:** Socket.IO
- **Media Optimization:** ImageKit API

---

## 🚀 Key Contributions & Backend Architecture

- **Unread Message Tracking & Aggregation:** Designed MongoDB query logic and state sync to maintain accurate unread message counts for each user in real time.
- **Authorized Message Deletion:** Built a secure `DELETE /messages/:id` endpoint that validates sender ownership before removing records from MongoDB and broadcasting socket events to synchronize active screens instantly.
- **Client State Optimization:** Handled real-time store updates in Zustand to ensure smooth message fetching, instant read receipt clearing, and zero stale state flashes when switching active chats.

---

## 💻 Local Setup & Installation

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone [https://github.com/arpita-pa/imessage.git](https://github.com/arpita-pa/imessage.git)
cd imessage