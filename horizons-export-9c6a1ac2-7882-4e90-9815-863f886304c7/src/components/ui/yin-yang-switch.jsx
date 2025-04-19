
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function YinYangSwitch({ theme, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className={cn(
        "relative h-16 w-16 rounded-full p-1 transition-all duration-500",
        theme === "light" 
          ? "bg-gradient-to-br from-gray-100 to-gray-200" 
          : "bg-gradient-to-br from-gray-900 to-black"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: theme === "light"
            ? "linear-gradient(135deg, #fff 50%, #000 50%)"
            : "linear-gradient(135deg, #000 50%, #fff 50%)"
        }}
      >
        <motion.div
          className={cn(
            "absolute h-8 w-8 rounded-full",
            theme === "light" ? "bg-black" : "bg-white"
          )}
          initial={false}
          animate={{
            x: theme === "light" ? 0 : 32,
            y: 16
          }}
        >
          <motion.div
            className={cn(
              "absolute h-4 w-4 rounded-full",
              theme === "light" ? "bg-white" : "bg-black"
            )}
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
