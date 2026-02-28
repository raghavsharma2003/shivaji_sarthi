"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/hooks/useLanguage";

export function Topbar() {
    const pathname = usePathname();
    const { t } = useLanguage();

    const titleMap: Record<string, string> = {
        "/dashboard": t.dashboard.title,
        "/questions": t.questions.title,
        "/posts": t.posts.title,
        "/map": t.map.title,
        "/voter": t.nav.voterApp,
    };

    const subtitleMap: Record<string, string> = {
        "/dashboard": t.dashboard.subtitle,
        "/map": t.map.subtitle,
    };

    const getMatchedPath = () => {
        if (pathname.startsWith("/questions")) return "/questions";
        if (pathname.startsWith("/voter")) return "/voter";
        if (pathname.startsWith("/posts")) return "/posts";
        if (pathname.startsWith("/map")) return "/map";
        return "/dashboard";
    };

    const match = getMatchedPath();
    const currentTitle = titleMap[match] || "PDA-Saathi";
    const currentSubtitle = subtitleMap[match];

    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-ink-2)] px-6">
            <div className="flex flex-col justify-center">
                <h1 className="text-lg font-semibold text-white tracking-tight">{currentTitle}</h1>
                {currentSubtitle && (
                    <p className="text-xs text-[var(--color-muted)]">{currentSubtitle}</p>
                )}
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-ink-3)] px-3 py-1.5 text-xs font-medium text-white flex-shrink-0">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-positive)] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-positive)]"></span>
                    </span>
                    Live
                </div>
                <div className="hidden rounded-[6px] border border-[var(--color-border)] bg-[var(--color-ink-3)] px-3 py-1.5 text-xs font-mono text-[var(--color-muted)] sm:block">
                    {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
            </div>
        </header>
    );
}
