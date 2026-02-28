"use client";

import { ChevronRight, Target } from "lucide-react";
import { Card } from "../ui/Card";

interface FunnelStep {
    label: string;
    value: string | number;
    conversion?: string;
    isTargetMet?: boolean;
}

const steps: FunnelStep[] = [
    { label: "Total Reach", value: "2,45,000" },
    { label: "App Opens", value: "85,400", conversion: "34%" },
    { label: "Engaged", value: "32,100", conversion: "37%" },
    { label: "Reacted", value: "12,450", conversion: "38%" },
    { label: "Shared (K)", value: "0.42", conversion: "Viral", isTargetMet: true },
];

export function ViralFunnel() {
    return (
        <Card className="flex flex-col gap-4 overflow-hidden">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-black text-[var(--color-text-main)] tracking-tight">Viral Funnel Performance</div>
                <div className="mt-4 text-[13px] text-[var(--color-text-mid)]">Past 7 days</div>
            </div>

            <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto no-scrollbar pb-2">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 shrink-0">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex h-20 w-32 flex-col items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-ink-3)] p-3 relative hover:border-[var(--color-saffron)] transition-colors">
                                <span className="text-xl font-mono font-bold text-white tracking-tight">{step.value}</span>
                                <div className="text-[10px] font-semibold text-[var(--color-text-soft)] mt-1 uppercase tracking-wider">{step.label}</div>

                                {step.isTargetMet && (
                                    <div className="absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-[var(--color-positive)] p-1 text-white shadow-sm ring-2 ring-[var(--color-ink-2)]">
                                        <Target size={12} />
                                    </div>
                                )}
                            </div>

                            {step.conversion && (
                                <div className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${step.isTargetMet
                                    ? "bg-[var(--color-positive)]/20 text-[var(--color-positive)]"
                                    : "bg-[var(--color-off-white)] text-[var(--color-muted)]"
                                    }`}>
                                    {step.conversion}
                                </div>
                            )}
                        </div>

                        {index < steps.length - 1 && (
                            <ChevronRight size={24} className="text-[var(--color-border)] mb-6 hidden md:block" />
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
}
