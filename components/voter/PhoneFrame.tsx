"use client";

import { useState, useEffect } from "react";
import { Battery, Wifi, Signal } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhoneFrame({ children }: { children: React.ReactNode }) {
    const [time, setTime] = useState("9:41");

    useEffect(() => {
        const update = () => {
            const d = new Date();
            setTime(`${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`);
        };
        update();
        const interval = setInterval(update, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative mx-auto h-[844px] w-[390px] shrink-0 overflow-hidden rounded-[55px] border-[14px] border-[var(--color-ink)] bg-black shadow-2xl ring-1 ring-white/10">
            {/* Glow Effect around phone is usually applied on the container outside, but we can do inner shadows too */}

            {/* Screen area */}
            <div className="relative h-full w-full overflow-hidden bg-[var(--color-ink-2)] text-white">

                {/* Status Bar */}
                <div className="absolute top-0 z-50 flex h-12 w-full items-center justify-between px-6 px-safe pt-2">
                    {/* Time */}
                    <span className="w-[54px] text-center text-[15px] font-semibold tracking-tight">{time}</span>

                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 top-2 h-[31px] w-[120px] -translate-x-1/2 rounded-[24px] bg-black">
                        {/* Camera dot */}
                        <div className="absolute right-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
                    </div>

                    {/* Icons */}
                    <div className="flex w-[54px] items-center justify-end gap-1.5">
                        <Signal size={14} fill="currentColor" />
                        <Wifi size={14} />
                        <Battery size={16} fill="currentColor" />
                    </div>
                </div>

                {/* Dynamic Content Provider Area */}
                <div className="h-full w-full pt-12 pb-[80px] overflow-y-auto no-scrollbar">
                    {children}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-white/40" />
            </div>
        </div>
    );
}
