import React from 'react'
import { motion } from "framer-motion";

const FeatureCard = ({ title, description }) => {
  return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="p-6 bg-gray-800 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-blue-400">{title}</h2>
          <p className="text-gray-300 mt-2">{description}</p>
        </motion.div>
      );
}

export default FeatureCard