"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquare, Map, Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { cn } from "@/lib/utils";

const mobileNavConfig = [
    { path: "/dashboard", icon: LayoutDashboard, labelKey: "dashboard" as const },
    { path: "/questions", icon: MessageSquare, labelKey: "questions" as const },
    { path: "/voter", icon: Smartphone, labelKey: "voterApp" as const },
    { path: "/map", icon: Map, labelKey: "map" as const },
];

export function MobileNav() {
    const pathname = usePathname();
    const { t } = useLanguage();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-[var(--color-border)] bg-[var(--color-ink-2)] md:hidden">
            {mobileNavConfig.map((item) => {
                const isActive = pathname.startsWith(item.path);

                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={cn(
                            "flex flex-1 flex-col items-center justify-center gap-1.5 transition-colors",
                            isActive ? "text-[var(--color-saffron)]" : "text-[var(--color-muted)] hover:text-white"
                        )}
                    >
                        <item.icon size={20} />
                        <span className="text-[10px] font-medium leading-none">{t.nav[item.labelKey]}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
