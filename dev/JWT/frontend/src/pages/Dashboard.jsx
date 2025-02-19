import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaKey, FaUser, FaLock } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white w-full p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold">JWT Authentication Dashboard</h1>
        <p className="mt-2 text-lg">Manage authentication seamlessly with JWT</p>
      </div>

      {/* Info Section */}
      <div className="w-full max-w-4xl mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">What is JWT?</h2>
        <p className="mt-2 text-gray-600">
          JSON Web Token (JWT) is a compact, URL-safe token that is used to securely
          transfer information between a client and a server.
        </p>
      </div>

      {/* How It Works */}
      <div className="w-full max-w-4xl mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">How JWT Works in Our Project?</h2>
        <ul className="mt-3 list-disc pl-6 text-gray-600 space-y-2">
          <li><FaUser className="inline text-blue-500" /> User registers or logs in via the frontend.</li>
          <li><FaKey className="inline text-blue-500" /> Backend verifies credentials and generates a JWT token.</li>
          <li><FaLock className="inline text-blue-500" /> Token is stored in localStorage and used for authentication.</li>
          <li><FaUser className="inline text-blue-500" /> Protected routes check for a valid JWT token.</li>
        </ul>
      </div>

      {/* Navigation & Logout */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Go to Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Go to Register
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
