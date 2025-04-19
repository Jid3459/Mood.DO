
import React from "react";
import { motion } from "framer-motion";

const mascotVariants = {
  light: {
    rest: {
      scale: 1,
      rotate: 0
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 2
        }
      }
    }
  },
  dark: {
    rest: {
      scale: 1,
      rotate: 0
    },
    hover: {
      scale: 1.1,
      rotate: [0, -20, 20, -20, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 1
        }
      }
    }
  }
};

export function Mascot({ theme }) {
  return (
    <motion.div
      variants={mascotVariants[theme]}
      initial="rest"
      whileHover="hover"
      className="relative h-24 w-24"
    >
      {theme === "light" ? (
        <img  alt="Peaceful meditation blob mascot" src="https://images.unsplash.com/photo-1696427851913-9c240f59c32e" />
      ) : (
        <img  alt="Energetic robot mascot" src="https://images.unsplash.com/photo-1584478532850-396b2734ca6f" />
      )}
    </motion.div>
  );
}
