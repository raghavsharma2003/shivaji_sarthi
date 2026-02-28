"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/hooks/useLanguage";

export function Topbar() {
    const pathname = usePathname();
    const { t } = useLanguage();

    const getPageInfo = () => {
        if (pathname.includes("/dashboard")) return { title: t.nav.dashboard, subtitle: "AI Analytics Overview" };
        if (pathname.includes("/questions")) return { title: t.nav.questions, subtitle: "Voter-to-Leader Queue" };
        if (pathname.includes("/posts")) return { title: t.nav.posts, subtitle: "Broadcast Analytics" };
        if (pathname.includes("/map")) return { title: t.nav.map, subtitle: "Geographic Heatmap" };
        if (pathname.includes("/voter")) return { title: t.nav.voterApp, subtitle: "Mobile Simulation Flow" };
        return { title: "PDA-Saathi", subtitle: "Where India's Leaders Listen" };
    };

    const { title, subtitle } = getPageInfo();

    // Format current date succinctly
    const dateStr = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date());

    return (
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 shadow-[var(--shadow-sm)]">

            {/* Title Area */}
            <div className="flex flex-col">
                <h1 className="text-lg font-bold tracking-tight text-[var(--color-text-main)]">
                    {title}
                </h1>
                <span className="text-xs text-[var(--color-text-soft)] mt-0.5">
                    {subtitle}
                </span>
            </div>

            {/* Right side utilities */}
            <div className="ml-auto flex items-center gap-3">
                {/* Environment Tag */}
                <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-[var(--color-green-light)] px-3 py-1 text-xs font-semibold text-[var(--color-green)]">
                    <div className="h-2 w-2 rounded-full bg-[var(--color-green)] animate-pulse" />
                    Live Demo
                </div>

                {/* Phase Tag */}
                <div className="hidden md:flex items-center rounded-full bg-[var(--color-saffron-pale)] px-3 py-1 text-xs font-semibold text-[var(--color-saffron)]">
                    MVP v1.0
                </div>

                {/* Target Tag */}
                <div className="hidden lg:flex items-center rounded-full bg-[#FFF8E7] px-3 py-1 text-xs font-semibold text-[#B8860B]">
                    UP Elections
                </div>
            </div>
        </header>
    );
}
