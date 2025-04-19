
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MoodSelector({ onSelectMood }) {
  return (
    <motion.div 
      className="flex min-h-screen flex-col items-center justify-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-center text-4xl font-bold">Choose Your Mood</h1>
      
      <div className="grid w-full max-w-lg gap-6 px-4">
        <motion.button
          onClick={() => onSelectMood("light")}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E6F7FF] to-[#F5F0FF] p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"
            initial={false}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          <h3 className="text-2xl font-semibold text-gray-800">🧘 Personal Growth</h3>
          <p className="mt-2 text-gray-600">Relaxed and Reflective</p>
        </motion.button>

        <motion.button
          onClick={() => onSelectMood("dark")}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-900 p-6 text-left shadow-lg transition-all duration-300 hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"
            initial={false}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          <h3 className="text-2xl font-semibold text-white">⚔️ Action Mode</h3>
          <p className="mt-2 text-purple-200">Let's Crush It</p>
        </motion.button>
      </div>

      <div className="absolute bottom-8 text-center text-sm text-gray-500">
        Your mood choice will be remembered for next time
      </div>
    </motion.div>
  );
}
