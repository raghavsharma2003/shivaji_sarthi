"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface SentimentItem {
    topic: string;
    percentage: number;
    alert?: boolean;
}

export function SentimentBar({ items }: { items: SentimentItem[] }) {
    return (
        <div className="flex flex-col gap-4">
            {items.map((item, index) => {
                let colorClass = "bg-[var(--color-positive)]";
                if (item.percentage < 50) colorClass = "bg-[var(--color-danger)]";
                else if (item.percentage < 70) colorClass = "bg-[var(--color-warning)]";

                return (
                    <div key={item.topic} className="flex items-center gap-3">
                        <div className="flex w-24 shrink-0 items-center justify-between text-sm font-medium font-hindi">
                            {item.topic}
                            {item.alert && <AlertTriangle size={14} className="text-[var(--color-warning)]" />}
                        </div>

                        <div className="relative h-2 flex-1 rounded-full bg-[var(--color-ink-3)] overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.percentage}%` }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                                className={`absolute bottom-0 left-0 top-0 rounded-full ${colorClass}`}
                            />
                        </div>

                        <div className="w-10 shrink-0 text-right text-xs font-mono font-medium text-[var(--color-muted)]">
                            {item.percentage}%
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
