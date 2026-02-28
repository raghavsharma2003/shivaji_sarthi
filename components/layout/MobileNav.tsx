"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquareText, Map, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Analytics" },
    { href: "/questions", icon: MessageSquareText, label: "Questions" },
    { href: "/map", icon: Map, label: "Heatmap" },
    { href: "/voter", icon: Smartphone, label: "Voter App" },
];

export function MobileNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-[var(--color-border)] bg-[var(--color-surface)] px-2 pb-safe md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
            {NAV_ITEMS.map((item) => {
                const isActive = pathname.startsWith(item.href);
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1 min-w-[64px] py-1 transition-colors",
                            isActive ? "text-[var(--color-saffron)]" : "text-[var(--color-text-soft)] hover:text-[var(--color-text-main)]"
                        )}
                    >
                        <Icon size={22} className={cn(isActive && "fill-[var(--color-saffron-pale)] stroke-[var(--color-saffron)]")} />
                        <span className={cn(
                            "text-[10px] font-semibold tracking-wide",
                            isActive ? "font-bold text-[var(--color-text-main)]" : ""
                        )}>
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
