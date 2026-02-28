"use client";

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function BarChart({ data }: { data: { day: string; count: number }[] }) {
    return (
        <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} stroke="var(--color-border)" strokeDasharray="3 3" />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "var(--color-muted)", fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "var(--color-muted)", fontSize: 12 }}
                    />
                    <Tooltip
                        cursor={{ fill: "var(--color-ink-3)" }}
                        contentStyle={{
                            backgroundColor: "var(--color-ink-2)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            color: "white"
                        }}
                        itemStyle={{ color: "var(--color-saffron)", fontWeight: "bold" }}
                    />
                    <Bar
                        dataKey="count"
                        fill="var(--color-saffron)"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                    />
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    );
}
