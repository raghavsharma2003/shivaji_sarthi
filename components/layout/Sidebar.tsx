"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquare, BarChart3, Map, Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

const navConfig = [
    { path: "/dashboard", icon: LayoutDashboard, labelKey: "dashboard" as const },
    { path: "/questions", icon: MessageSquare, labelKey: "questions" as const },
    { path: "/posts", icon: BarChart3, labelKey: "posts" as const },
    { path: "/map", icon: Map, labelKey: "map" as const },
    { path: "/voter", icon: Smartphone, labelKey: "voterApp" as const },
];

export function Sidebar() {
    const pathname = usePathname();
    const { t } = useLanguage();

    return (
        <aside className="fixed left-0 top-0 bottom-0 z-40 hidden w-[220px] flex-col border-r border-[var(--color-border)] bg-[var(--color-ink-2)] md:flex">
            {/* Logo Area */}
            <div className="flex h-16 items-center gap-3 px-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[var(--color-saffron)] text-white font-hindi font-bold text-lg">
                    स
                </div>
                <span className="font-semibold text-white tracking-tight">PDA-Saathi</span>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 space-y-2 px-3 py-4">
                {navConfig.map((item) => {
                    const isActive = pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "flex h-10 items-center gap-3 rounded-r-md border-l-2 px-3 text-sm font-medium transition-colors",
                                isActive
                                    ? "border-[var(--color-saffron)] bg-[var(--color-saffron-glow)] text-[var(--color-saffron)]"
                                    : "border-transparent text-[var(--color-muted)] hover:bg-[var(--color-ink-3)] hover:text-white"
                            )}
                        >
                            <item.icon size={20} />
                            {t.nav[item.labelKey]}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Area */}
            <div className="p-4 space-y-4 border-t border-[var(--color-border)] bg-[var(--color-ink-2)]">
                <LanguageToggle />
                <div className="flex items-center gap-3 px-2">
                    {/* Avatar Placeholder */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink-3)] text-xs font-bold text-white border border-[var(--color-border)]">
                        YA
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-white truncate w-24">Yogi Adityanath</span>
                        <span className="text-[11px] text-[var(--color-muted)] truncate w-24">Chief Minister</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
