import * as React from "react"
import { Card } from "@/components/ui/Card"
import { ArrowUpRight, ArrowDownRight, LucideIcon } from "lucide-react"

export function MetricCard({
    title,
    value,
    delta,
    icon: Icon,
    trend,
}: {
    title: string;
    value: string | number;
    delta: string;
    icon: LucideIcon;
    trend: "up" | "down" | "neutral";
}) {
    return (
        <Card className="flex flex-col gap-3 hover:bg-[var(--color-ink-3)]">
            <div className="flex items-center gap-2 text-[var(--color-muted)]">
                <Icon size={20} />
                <span className="text-[13px]">{title}</span>
            </div>
            <div className="flex items-baseline justify-between">
                <span className="text-[28px] font-mono text-white tracking-tight">{value}</span>
                {trend !== "neutral" && (
                    <span
                        className={`flex items-center text-[12px] font-medium ${trend === "up" ? "text-[var(--color-positive)]" : "text-[var(--color-danger)]"
                            }`}
                    >
                        {trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {delta}
                    </span>
                )}
            </div>
        </Card>
    )
}
