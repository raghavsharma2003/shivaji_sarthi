import * as React from "react"
import { Card } from "@/components/ui/Card"
import { ArrowUpRight, ArrowDownRight, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils";

export function MetricCard({
    title,
    value,
    delta,
    icon: Icon,
    trend,
    label
}: {
    title: string;
    value: string | number;
    delta: string;
    icon: LucideIcon;
    trend: "up" | "down" | "neutral";
    label?: string; // made optional to not break anything
}) {
    return (
        <div className="flex flex-col gap-2 rounded-[10px] border border-[var(--color-border)] bg-[#FDFDFE] p-4 transition-all hover:bg-[var(--color-surface)]">
            <div className="flex items-center gap-2 text-[var(--color-text-mid)]">
                <Icon size={20} />
                <span className="text-[13px] font-semibold">{title}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
                <span className="text-2xl font-black tracking-tight text-[var(--color-text-main)]">{value}</span>
                {trend !== "neutral" && (
                    <span
                        className={cn(
                            "flex items-center text-[12px] font-bold",
                            trend === "up" ? "text-[var(--color-green)]" : "text-[var(--color-red)]"
                        )}
                    >
                        {trend === "up" ? "↑" : "↓"} {Math.abs(Number(delta))}%
                    </span>
                )}
            </div>
            {label && <span className="text-xs font-semibold text-[var(--color-text-soft)]">{label}</span>}
        </div>
    );
}
