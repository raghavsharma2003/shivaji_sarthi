"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { strings } from "../i18n";

type Language = "hi" | "en";
type StringsType = typeof strings.hi;

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: StringsType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>("hi");

    useEffect(() => {
        // Attempt to load from localStorage if we added persistence, else default hi
        const saved = localStorage.getItem("pda-lang") as Language;
        if (saved === "hi" || saved === "en") {
            setLang(saved);
        }
    }, []);

    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem("pda-lang", newLang);
    };

    const t = strings[lang];

    return (
        <LanguageContext.Provider value= {{ lang, setLang: handleSetLang, t }
}>
    { children }
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
