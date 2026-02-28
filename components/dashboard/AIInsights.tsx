"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";

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
        <div className="relative flex w-full items-start gap-3 overflow-hidden rounded-[10px] bg-[var(--color-ink-3)] p-4 border-l-2 border-l-[var(--color-saffron)]">
            <div className="flex h-6 items-center gap-1.5 rounded-[4px] bg-[var(--color-saffron)]/10 px-2 text-xs font-bold text-[var(--color-saffron)] mt-0.5">
                <Bot size={14} />
                <span>AI</span>
            </div>
            <div className="flex-1 relative h-6">
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
