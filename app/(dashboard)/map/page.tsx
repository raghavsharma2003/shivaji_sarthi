"use client";

import { useState } from "react";
import { mockDistricts } from "@/lib/data";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle, Users, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MapPage() {
    const { t } = useLanguage();
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-6 h-full animate-in fade-in duration-500 pb-20 md:pb-6">
            <div>
                <h2 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">{t.map.title}</h2>
                <p className="text-sm text-[var(--color-text-soft)]">{t.map.subtitle}</p>
            </div>

            <div className="relative w-full flex-1 min-h-[500px] rounded-[10px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm p-6 overflow-hidden flex items-center justify-center">
                {/* Abstract Map Grid */}
                <div className="relative w-full max-w-3xl h-full min-h-[400px]">

                    {mockDistricts.map((d, i) => {
                        // Very rough abstract positioning for mock representation
                        // Normal app would use real coords.
                        const xPos = [30, 60, 80, 45][i] || 50;
                        const yPos = [40, 65, 50, 20][i] || 50;
                        const size = Math.max(40, Math.min(80, d.users / 500));

                        let color = "bg-[var(--color-positive)]"; // >70
                        if (d.sentiment < 50) color = "bg-[var(--color-danger)]";
                        else if (d.sentiment < 70) color = "bg-[var(--color-warning)]";

                        if (d.sentiment > 65 && d.sentiment <= 75) color = "bg-[var(--color-saffron)]";

                        return (
                            <div
                                key={d.id}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110 z-10"
                                style={{ left: `${xPos}%`, top: `${yPos}%` }}
                                onMouseEnter={() => setHoveredId(d.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div
                                    className={cn(
                                        "flex items-center justify-center rounded-full opacity-80 shadow-lg text-white font-hindi font-bold",
                                        color
                                    )}
                                    style={{ width: size, height: size, fontSize: size / 3.5 }}
                                >
                                    {d.nameHi.substring(0, 3)}
                                </div>

                                <div className="absolute -top-1 -right-1 rounded-full bg-[var(--color-red)] p-1 text-white ring-2 ring-[var(--color-surface)] animate-pulse">
                                    <AlertTriangle size={10} />
                                </div>

                                {/* Tooltip */}
                                {hoveredId === d.id && (
                                    <div className="absolute top-full left-1/2 mt-2 -translate-x-1/2 w-48 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-off-white)] p-3 shadow-xl z-50 animate-in fade-in zoom-in-95 pointer-events-none">
                                        <h4 className="font-bold text-[var(--color-text-main)] font-hindi mb-2">{d.nameHi} <span className="text-[10px] text-[var(--color-text-soft)] font-sans ml-1">({d.nameEn})</span></h4>
                                        <div className="space-y-1.5 text-xs text-[var(--color-text-mid)]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1.5"><Users size={12} /> Users</div>
                                                <span className="font-mono text-[var(--color-text-main)] font-medium">{d.users.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1.5"><AlertTriangle size={12} /> Sentiment</div>
                                                <span className="font-mono text-[var(--color-text-main)] font-medium">{d.sentiment}%</span>
                                            </div>
                                            <div className="pt-1.5 mt-1.5 border-t border-[var(--color-border)]">
                                                <span className="block mb-1">{t.map.tooltip.concern}:</span>
                                                <Badge variant="category">{d.topConcern}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-off-white)] p-3 text-xs w-48 shadow-md">
                    <h5 className="font-bold text-[var(--color-text-main)] mb-2 tracking-tight">Legend</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[var(--color-text-mid)] font-medium">
                            <div className="h-3 w-3 rounded-full bg-[var(--color-saffron)] opacity-80" /> High Engagement
                        </div>
                        <div className="flex items-center gap-2 text-[var(--color-text-mid)] font-medium">
                            <div className="h-3 w-3 rounded-full bg-[var(--color-warning)] opacity-80" /> Moderate Engagement
                        </div>
                        <div className="flex items-center gap-2 text-[var(--color-text-mid)] font-medium">
                            <div className="h-3 w-3 rounded-full bg-[var(--color-red)] opacity-80" /> Low Sentiment (&lt;50%)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
