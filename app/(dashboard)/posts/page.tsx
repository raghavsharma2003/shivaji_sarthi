"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { mockPosts } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Users, ThumbsUp, MessageCircle, Share2, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PostsPage() {
    const { t } = useLanguage();
    const [sortBy, setSortBy] = useState<"reach" | "agreement" | "viral" | "date">("date");

    const sortedPosts = [...mockPosts].sort((a, b) => {
        if (sortBy === "reach") return b.reach - a.reach;
        const aAgreePct = a.reactions.agreed / (a.reach || 1);
        const bAgreePct = b.reactions.agreed / (b.reach || 1);
        if (sortBy === "agreement") return bAgreePct - aAgreePct;
        if (sortBy === "viral") return b.viralScore - a.viralScore;
        // For mock, fallback to id sorting to simulate date
        return a.id.localeCompare(b.id);
    });

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-20 md:pb-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">{t.posts.title}</h2>
                <div className="flex items-center gap-2 text-sm bg-[var(--color-surface)] p-1 rounded-lg border border-[var(--color-border)] shadow-sm">
                    <span className="text-[var(--color-muted)] px-3 hidden sm:inline-block">Sort by:</span>
                    {(["reach", "agreement", "viral", "date"] as const).map(key => (
                        <button
                            key={key}
                            onClick={() => setSortBy(key)}
                            className={cn(
                                "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                                sortBy === key
                                    ? "bg-[var(--color-saffron)] text-white shadow-sm border border-[var(--color-saffron-lt)]"
                                    : "text-[var(--color-text-soft)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-surface-hover)]"
                            )}
                        >
                            {t.posts.sort[key]}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col rounded-[10px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm overflow-hidden">
                {sortedPosts.map((post, i) => {
                    const agreePct = Math.round((post.reactions.agreed / post.reach) * 100) || 0;

                    return (
                        <div
                            key={post.id}
                            className={cn(
                                "flex flex-col gap-4 p-5 transition-colors hover:bg-[var(--color-surface-hover)]",
                                i !== sortedPosts.length - 1 && "border-b border-[var(--color-border)]"
                            )}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Badge variant="category">{post.category}</Badge>
                                        {post.viralScore > 0.5 && (
                                            <Badge variant="status" className="bg-[var(--color-warning)]/20 text-[var(--color-warning)] border-[var(--color-warning)]/30 font-bold gap-1">
                                                <Flame size={12} /> {t.posts.trending}
                                            </Badge>
                                        )}
                                        <span className="text-xs text-[var(--color-text-soft)]">{post.date}</span>
                                    </div>
                                    <p className="text-sm text-[var(--color-text-main)] font-hindi line-clamp-2 md:line-clamp-none max-w-3xl">
                                        "{post.contentHi}"
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-off-white)] px-3 py-1 text-xs">
                                    <Users size={14} className="text-[var(--color-text-soft)]" />
                                    <span className="font-mono text-[var(--color-text-mid)]">{post.reach.toLocaleString()}</span>
                                </div>

                                <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-off-white)] px-3 py-1 text-xs">
                                    <ThumbsUp size={14} className="text-[var(--color-saffron)]" />
                                    <span className="font-mono font-medium text-[var(--color-text-main)]">{agreePct}%</span>
                                    <div className="ml-2 w-16 h-1.5 rounded-full bg-[var(--color-border)] overflow-hidden">
                                        <div className="h-full bg-[var(--color-saffron)]" style={{ width: `${agreePct}%` }} />
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-off-white)] px-3 py-1 text-xs">
                                    <MessageCircle size={14} className="text-[var(--color-text-soft)]" />
                                    <span className="font-mono text-[var(--color-text-mid)]">{post.reactions.questions}</span>
                                </div>

                                <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-off-white)] px-3 py-1 text-xs">
                                    <Share2 size={14} className="text-[var(--color-text-soft)]" />
                                    <span className="font-mono text-[var(--color-text-mid)]">{post.reactions.shares}</span>
                                </div>

                                <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-off-white)] px-3 py-1 text-xs">
                                    <Flame size={14} className={post.viralScore > 0.5 ? "text-[#E84545]" : "text-[var(--color-text-soft)]"} />
                                    <span className="font-mono font-medium" style={{ color: post.viralScore > 0.5 ? "var(--color-red)" : "var(--color-text-soft)" }}>
                                        {post.viralScore}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
