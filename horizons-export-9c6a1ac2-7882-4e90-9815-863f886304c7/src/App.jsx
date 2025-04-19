
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Home, Settings, Target, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TodayView } from "@/components/TodayView";
import { HabitsView } from "@/components/HabitsView";
import { MoodSelector } from "@/components/MoodSelector";
import { YinYangSwitch } from "@/components/ui/yin-yang-switch";

function App() {
  const [activeTab, setActiveTab] = useState("today");
  const [theme, setTheme] = useState(null);
  const [showMoodSelector, setShowMoodSelector] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("mood-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setShowMoodSelector(false);
    }
  }, []);

  const handleMoodSelect = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("mood-theme", selectedTheme);
    setShowMoodSelector(false);
    document.documentElement.setAttribute("data-theme", selectedTheme);
    
    // Play haptic feedback if supported
    if (window.navigator.vibrate) {
      window.navigator.vibrate(selectedTheme === "light" ? [100] : [50, 50, 50]);
    }
  };

  const tabs = [
    { id: "today", icon: Home, label: "Today" },
    { id: "habits", icon: Target, label: "Habits" },
    { id: "modes", icon: Brain, label: "Modes" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  if (showMoodSelector || !theme) {
    return <MoodSelector onSelectMood={handleMoodSelect} />;
  }

  return (
    <div className={cn(
      "min-h-screen bg-background transition-all duration-500",
      theme === "light" 
        ? "bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]" 
        : "bg-gradient-to-br from-[#1a1b1e] to-[#2d2e32]"
    )}>
      <div className="mx-auto max-w-md pb-20">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background/80 p-4 backdrop-blur">
          <div className="w-16" /> {/* Spacer for centering */}
          <h1 className={cn(
            "text-2xl font-bold transition-all duration-300",
            theme === "light"
              ? "font-rounded text-gray-800"
              : "font-display text-white"
          )}>
            Mood
          </h1>
          <YinYangSwitch theme={theme} onToggle={() => handleMoodSelect(theme === "light" ? "dark" : "light")} />
        </header>

        <main className="p-4">
          <AnimatePresence mode="wait">
            {activeTab === "today" && <TodayView key="today" theme={theme} />}
            {activeTab === "habits" && <HabitsView key="habits" theme={theme} />}
            {activeTab === "modes" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold">Mood Modes</h2>
                <div className="grid gap-4">
                  <motion.div
                    className={cn(
                      "mood-card cursor-pointer",
                      "bg-gradient-to-br from-[#E6F7FF] to-[#F5F0FF]"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMoodSelect("light")}
                  >
                    <h3 className="text-lg font-semibold">🧘 Personal Growth Mode</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Focus on mindfulness and steady progress
                    </p>
                  </motion.div>
                  <motion.div
                    className={cn(
                      "mood-card cursor-pointer",
                      "bg-gradient-to-br from-purple-900 to-indigo-900 text-white"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMoodSelect("dark")}
                  >
                    <h3 className="text-lg font-semibold">⚡ Action Mode</h3>
                    <p className="mt-2 text-sm text-purple-200">
                      Maximize productivity and energy
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
            {activeTab === "calendar" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Calendar View (Coming Soon)
              </motion.div>
            )}
            {activeTab === "settings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Settings View (Coming Soon)
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 border-t bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-md justify-around p-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "nav-item",
                  theme === "light" ? "nav-item-light" : "nav-item-dark",
                  activeTab === tab.id && "text-primary"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <tab.icon className="h-5 w-5" />
                <span className="text-xs">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
