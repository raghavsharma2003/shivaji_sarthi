"use client";

import { Users, Activity, MessageCircle, Share2, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { SentimentBar } from "@/components/dashboard/SentimentBar";
import { BarChart } from "@/components/dashboard/BarChart";
import { ViralFunnel } from "@/components/dashboard/ViralFunnel";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { mockMetrics } from "@/lib/data";

export default function DashboardPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 md:pb-6">
            <AIInsights insights={t.dashboard.aiInsights} />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title={t.dashboard.totalVoters}
                    value="2,34,891"
                    delta="+12%"
                    trend="up"
                    icon={Users}
                />
                <MetricCard
                    title={t.dashboard.engagementRate}
                    value="74%"
                    delta="+5.2%"
                    trend="up"
                    icon={Activity}
                />
                <MetricCard
                    title={t.dashboard.totalQuestions}
                    value="18,234"
                    delta="-2.1%"
                    trend="down"
                    icon={MessageCircle}
                />
                <MetricCard
                    title={t.dashboard.viralCoefficient}
                    value="0.34"
                    delta="+0.12"
                    trend="up"
                    icon={Share2}
                />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card className="flex flex-col gap-6 p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-base text-[var(--color-text-main)] tracking-tight">{t.dashboard.sentimentByTopic}</h3>
                        <Activity size={16} className="text-[var(--color-text-soft)]" />
                    </div>
                    <SentimentBar
                        items={[
                            { topic: "रोज़गार", percentage: 52 },
                            { topic: "बिजली", percentage: 29, alert: true },
                            { topic: "किसान", percentage: 89 },
                            { topic: "सड़क", percentage: 61 },
                            { topic: "शिक्षा", percentage: 78 },
                        ]}
                    />
                </Card>

                <Card className="flex flex-col gap-6 p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-base text-[var(--color-text-main)] tracking-tight">{t.dashboard.weeklyEngagement}</h3>
                        <TrendingUp size={16} className="text-[var(--color-text-soft)]" />
                    </div>
                    <BarChart data={mockMetrics.weeklyEngagement} />
                </Card>
            </div>

            <div className="w-full">
                <ViralFunnel />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card className="h-64 p-6">
                    {/* Placeholder for Top Questions Summary */}
                    <h3 className="font-semibold text-base text-[var(--color-text-main)] tracking-tight">{t.dashboard.topQuestions}</h3>
                    <div className="flex h-full items-center justify-center text-sm text-[var(--color-text-soft)]">
                        <p className="max-w-[80%] text-center">AI generated summary of recent questions will appear here based on topic clustering.</p>
                    </div>
                </Card>
                <Card className="h-64 p-6">
                    {/* Placeholder for Reaction Breakdown */}
                    <h3 className="font-semibold text-base text-[var(--color-text-main)] tracking-tight">{t.dashboard.reactionBreakdown}</h3>
                    <div className="flex h-full items-center justify-center text-sm text-[var(--color-text-soft)]">
                        <div className="flex gap-4 font-medium text-[var(--color-text-mid)]">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[var(--color-saffron)] shadow-sm"></div> Agreed</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[var(--color-green)] shadow-sm"></div> Shared</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-border)] shadow-sm"></div> Questions</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
