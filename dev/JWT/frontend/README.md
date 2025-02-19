# 🚀 React Frontend - JWT Authentication Project

Welcome to the frontend of our **JWT Authentication Project**! This React app is the user interface for handling authentication using JSON Web Tokens (JWT). Let's break down what we've done here! 🛠️🔥

---
## 🎯 Project Overview
This is a **React-powered** frontend designed to work with a Django backend. It includes:
✅ User Registration & Login
✅ JWT-based authentication
✅ Protected Routes
✅ A cool Dashboard with Tailwind CSS ✨

---
## 🚀 Getting Started
### 🔧 Installation
Make sure you have **Node.js** installed, then run:
```sh
npm install
npm start
```
This will install dependencies and start the React app at `http://localhost:3000`.

---
## 🏗️ How It Works

### 1️⃣ **User Authentication**
- The user **registers** or **logs in** through the frontend.
- The credentials are sent to the backend (Django API) via an **Axios** POST request.
- If valid, the backend returns a **JWT token**.
- The token is stored in **localStorage** for future authentication.

### 2️⃣ **Protected Routes**
- Certain pages (like the Dashboard) require authentication.
- Before accessing these pages, the app checks for a **valid JWT token**.
- If no token is found, the user is redirected to the login page.

### 3️⃣ **Logout**
- Users can log out, which removes the token from localStorage and redirects them to the login page.

---
## 📦 Tech Stack
🚀 **React** - Frontend UI
🎨 **Tailwind CSS** - Styling
🔗 **Axios** - API requests
🔐 **JWT Authentication** - Secure login system
📍 **React Router** - Navigation between pages

---
## 🖥️ Project Structure
```
frontend/
├── src/
│   ├── pages/
│   │   ├── LoginPage.jsx  # Login form
│   │   ├── RegisterPage.jsx  # Registration form
│   │   ├── Dashboard.jsx  # JWT Dashboard (protected)
│   ├── components/
│   │   ├── Navbar.jsx  # Navigation bar
│   ├── App.js  # Routes and main app logic
│   ├── axios.js  # Axios setup for API calls
│   ├── index.js  # React entry point
├── package.json  # Dependencies
└── README.md  # You are here! 📖
```

---
## 📢 Notes
- Ensure your backend is running at `http://localhost:8000/`
- If you face **CORS errors**, make sure Django’s settings allow requests from React (`CORS_ALLOWED_ORIGINS`).

---
