"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquareText, FileText, Map, Smartphone } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Analytics" },
    { href: "/voter", icon: Smartphone, label: "Voter App" },
    { href: "/questions", icon: MessageSquareText, label: "Questions", badge: 23 },
    { href: "/posts", icon: FileText, label: "Performance" },
    { href: "/map", icon: Map, label: "Heatmap" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden h-full w-[72px] flex-col items-center bg-[var(--color-navy)] py-5 transition-all md:flex z-50 fixed left-0 top-0 bottom-0 shadow-xl">

            {/* Logo */}
            <Link href="/dashboard" className="mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[var(--color-saffron)] text-xl font-black text-white shadow-lg transition-transform hover:scale-105">
                स
            </Link>

            {/* Divider */}
            <div className="h-px w-10 bg-white/10 my-2" />

            {/* Links */}
            <nav className="flex flex-1 flex-col items-center gap-2 w-full px-3 mt-2">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative flex h-12 w-12 items-center justify-center rounded-[12px] transition-all"
                        >
                            {/* Active / Hover Background */}
                            <div
                                className={cn(
                                    "absolute inset-0 rounded-[12px] transition-all",
                                    isActive
                                        ? "bg-[var(--color-saffron)]"
                                        : "bg-transparent group-hover:bg-white/10"
                                )}
                            />

                            <Icon
                                size={22}
                                className={cn(
                                    "relative z-10 transition-colors",
                                    isActive ? "text-white" : "text-white/45 group-hover:text-white/90"
                                )}
                            />

                            {/* Badge */}
                            {item.badge && (
                                <div className="absolute right-1 top-1 z-20 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[var(--color-red)] px-[4px] text-[9px] font-bold leading-none text-white ring-2 ring-[var(--color-navy)]">
                                    {item.badge}
                                </div>
                            )}

                            {/* Tooltip (CSS only for clean rendering) */}
                            <div className="pointer-events-none absolute left-[64px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-[6px] bg-[var(--color-navy-mid)] px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 z-50">
                                {item.label}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer Utilities */}
            <div className="mt-auto flex flex-col items-center gap-4 w-full px-2">
                <LanguageToggle />

                {/* User Profile Hook */}
                <div className="flex h-10 w-10 shrink-0 mt-2 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-gold)] font-bold text-white shadow-sm ring-2 ring-white/10 transition-transform hover:scale-105">
                    L
                </div>
            </div>
        </aside>
    );
}
