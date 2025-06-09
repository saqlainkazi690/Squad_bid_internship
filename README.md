# 🛒 SquadBid Group Buy App

This is a full-stack web application built as part of the SquadBid Full Stack Internship Task.

The idea behind the app is to create a **simple group buying experience**, where users can start a group buy for a product, generate a referral link, and invite others to join. Once a target number of people join within a time limit, the group unlocks a discount — encouraging social buying.

---

## ✅ Features

- Create a group buy session for a product
- Generate and share referral links
- Track how many users have joined each group
- Show real-time group progress and deal unlock status
- Join a group directly from a shared link
- Countdown timer for group expiry
- Inline UI feedback (no alerts or popups)
- Friendly UI inspired by Blinkit/Meesho

---

## 💡 Reasoning & Approach

- **Core functionality first**: Focused on core backend (group creation, joining, tracking)
- **Simple UI**: Prioritized clarity over complexity to meet the 4-hour build time
- **Share-first design**: Referral links are central to user interaction
- **Reusability**: Used component-based design (React) and modular backend (Express)

---

## ⚙️ Tech Stack

- **Frontend**: React, Axios, CSS (no UI libraries for speed)
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Database**: MongoDB Atlas (cloud)
- **Deployment**: [Optional] Render for backend, Vercel/Netlify for frontend

---

## 🛠 Setup Instructions

### 📦 Backend (Express API)

```bash
cd backend
npm install
touch .env
MONGO_URI=your_mongodb_connection_string
PORT=5000

To trigger the backend:

cd backend
node server.js

For frontend:

cd frontend
npm install
npm start
