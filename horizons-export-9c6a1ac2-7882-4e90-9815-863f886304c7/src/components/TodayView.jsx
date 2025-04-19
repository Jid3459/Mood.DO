
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDate = new Date();

export function TodayView({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Calendar Strip */}
      <div className="relative">
        <div className="flex items-center justify-between px-2">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium">
            {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </span>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 flex justify-between">
          {weekDays.map((day, index) => {
            const date = new Date();
            date.setDate(currentDate.getDate() - currentDate.getDay() + index);
            const isToday = date.getDate() === currentDate.getDate();

            return (
              <div
                key={day}
                className={cn(
                  "flex flex-col items-center rounded-lg p-2",
                  isToday && "bg-primary text-primary-foreground"
                )}
              >
                <span className="text-xs">{day}</span>
                <span className="mt-1 text-sm font-medium">{date.getDate()}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote Box */}
      <div
        className={cn(
          "quote-box",
          theme === "light" ? "quote-box-light" : "quote-box-dark"
        )}
      >
        {theme === "light" ? "Progress is peace." : "Crush it today."}
      </div>

      {/* Daily Challenge */}
      <div
        className={cn(
          "mood-card",
          theme === "light" ? "mood-card-light" : "mood-card-dark"
        )}
      >
        <h3 className="text-lg font-semibold">Daily Challenge</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Complete 3 tasks from your priority list
        </p>
        <div className="mt-4">
          <Button className="w-full">Accept Challenge</Button>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <h3 className="font-semibold">Today's Schedule</h3>
        {[9, 10, 11, 12, 13, 14].map((hour) => (
          <div
            key={hour}
            className={cn(
              "flex items-center space-x-4 rounded-lg p-3",
              theme === "light" ? "bg-gray-50" : "bg-gray-900/20"
            )}
          >
            <span className="text-sm font-medium">
              {hour % 12 || 12}:00 {hour >= 12 ? "PM" : "AM"}
            </span>
            <div
              className={cn(
                "h-full w-0.5",
                theme === "light" ? "bg-gray-200" : "bg-gray-700"
              )}
            />
            <div className="flex-1">
              <div
                className={cn(
                  "rounded-lg p-2",
                  theme === "light" ? "bg-white" : "bg-gray-800/50"
                )}
              >
                <p className="text-sm">Task Block</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
