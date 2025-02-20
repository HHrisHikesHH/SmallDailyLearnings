import { useState } from "react";
import { Button } from "../shadcn/Button";
import { motion } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-400">Role-Based Access Control (RBAC) with JWT</h1>
        <p className="mt-4 text-lg text-gray-300">Secure your applications with RBAC and JWT authentication using React and Python.</p>
      </motion.div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <FeatureCard title="RBAC" description="Role-Based Access Control (RBAC) allows secure user role management, restricting access based on permissions." />
        <FeatureCard title="JWT Authentication" description="JSON Web Tokens (JWT) enable secure authentication and authorization in modern web applications." />
        <FeatureCard title="React & Tailwind" description="Frontend built with React and Tailwind CSS for a seamless user experience." />
        <FeatureCard title="Django & FastAPI" description="Backend powered by Python frameworks for efficient authentication and data handling." />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <Button onClick={() => navigate("/login")} className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg mx-5">Login</Button>
        <Button onClick={() => navigate("/register")} className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg">Register</Button>
      </motion.div>
    </div>
  );
}

export default LandingPage;