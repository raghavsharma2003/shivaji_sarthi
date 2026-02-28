"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function LanguageToggle() {
    const { lang, setLang } = useLanguage();

    return (
        <div className="flex h-10 items-center justify-between rounded-[999px] bg-[var(--color-ink-3)] p-1 text-sm font-medium">
            <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                    "relative flex h-full flex-1 items-center justify-center rounded-full transition-colors",
                    lang === "en" ? "text-white" : "text-[var(--color-muted)] hover:text-white"
                )}
            >
                {lang === "en" && (
                    <motion.div
                        layoutId="lang-active"
                        className="absolute inset-0 rounded-full bg-[var(--color-saffron)]"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                )}
                <span className="relative z-10">EN</span>
            </button>

            <button
                type="button"
                onClick={() => setLang("hi")}
                className={cn(
                    "relative flex h-full flex-1 items-center justify-center rounded-full font-hindi transition-colors",
                    lang === "hi" ? "text-white" : "text-[var(--color-muted)] hover:text-white"
                )}
            >
                {lang === "hi" && (
                    <motion.div
                        layoutId="lang-active"
                        className="absolute inset-0 rounded-full bg-[var(--color-saffron)]"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                )}
                <span className="relative z-10">हिं</span>
            </button>
        </div>
    );
}
