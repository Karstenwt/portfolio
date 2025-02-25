import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.scss";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500); // ✅ Disparition après 0.5s
          return 100;
        }
        return prev + 1;
      });
    }, 15); // ✅ Chargement rapide

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="animated-bg" /> {/* ✅ Fond animé */}
      <motion.h1 
        className="loading-text"
        initial={{ y: 0 }}
        animate={{ y: progress === 100 ? -50 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Bienvenue
      </motion.h1>
      <motion.span 
        className="loading-percentage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
