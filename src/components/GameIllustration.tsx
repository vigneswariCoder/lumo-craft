import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Img from '../assets/images/game-controller.png'

const GameIllustration = () => {
  const images = [
    "assets/images/game-controller.png",
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      sx={{
        position: "relative",
        width: "100%",
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={Img}
          alt={`Game Illustration ${index + 1}`}
          style={{
            width: "120%",
            height: "120%",
            objectFit: "contain",
            borderRadius: "20px",
            position: "absolute",
          }}
          animate={{
            x: [index * 10 - 20, index * 10 + 20, index * 10 - 20],
            y: [index * 10 - 10, index * 10 + 10, index * 10 - 10],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: "absolute",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(45deg, #00ff87, #60efff)",
            filter: "blur(15px)",
            opacity: 0.4,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
        />
      ))}
    </Box>
  );
};

export default GameIllustration;
