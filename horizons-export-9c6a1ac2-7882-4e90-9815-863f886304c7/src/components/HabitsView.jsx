
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Dumbbell, Heart, Book, Coffee, Focus as Meditation, Plus } from 'lucide-react';

const habits = [
  { id: 1, name: "Exercise", icon: Dumbbell, streak: 5 },
  { id: 2, name: "Meditation", icon: Meditation, streak: 3 },
  { id: 3, name: "Reading", icon: Book, streak: 7 },
  { id: 4, name: "Healthy Eating", icon: Heart, streak: 4 },
  { id: 5, name: "Morning Routine", icon: Coffee, streak: 2 },
];

export function HabitsView({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#4A6FA5]">My Habits</h2>
        <span className="text-sm text-muted-foreground">5 Active</span>
      </div>

      <div className="grid gap-4">
        {habits.map((habit) => (
          <motion.div
            key={habit.id}
            className={cn(
              "habit-card",
              theme === "light" ? "habit-card-light" : "habit-card-dark"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={cn(
                    "rounded-lg p-2",
                    theme === "light"
                      ? "bg-[#6BBF59]/20 text-[#6BBF59]"
                      : "bg-primary/20 text-primary"
                  )}
                >
                  <habit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-[#2D2D2D]">{habit.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {habit.streak} day streak
                  </p>
                </div>
              </div>
              <button
                className={cn(
                  "rounded-full p-2 transition-colors",
                  theme === "light"
                    ? "text-[#6BBF59] hover:bg-[#6BBF59]/10"
                    : "hover:bg-gray-800"
                )}
              >
                <Check className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-24 right-4 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors fab-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Plus className="h-6 w-6" />
      </motion.button>
    </motion.div>
  );
}
