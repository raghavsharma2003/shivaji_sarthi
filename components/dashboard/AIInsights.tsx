"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

export function AIInsights({ insights }: { insights: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (insights.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % insights.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [insights.length]);

    return (
        <div className="relative flex min-h-[140px] items-center overflow-hidden rounded-[16px] bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-soft)] p-6 shadow-[var(--shadow-md)]">
            <div className="absolute left-6 top-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-[#F5A623]" />
                <h3 className="text-sm font-bold tracking-tight text-white/90">AI Insights</h3>
            </div>
            <div className="flex-1 relative h-6 mt-10"> {/* Adjusted margin-top for content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center text-sm font-medium font-hindi text-white"
                    >
                        {insights[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
