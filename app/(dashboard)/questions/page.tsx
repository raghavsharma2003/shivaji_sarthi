"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { mockQuestions } from "@/lib/data";
import { Question } from "@/lib/types";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { QuestionCard } from "@/components/dashboard/QuestionCard";
import { QuestionDrawer } from "@/components/dashboard/QuestionDrawer";
import { Button } from "@/components/ui/Button";

const topics = ["रोज़गार", "बिजली", "किसान", "सड़क", "शिक्षा"];
const priorities = ["Urgent", "Medium", "Low"];
const districts = ["लखनऊ", "कानपुर", "वाराणसी", "आगरा"];

export default function QuestionsPage() {
    const { t } = useLanguage();
    const [activeTopic, setActiveTopic] = useState<string>("All");
    const [activePriority, setActivePriority] = useState<string>("All");
    const [activeDistrict, setActiveDistrict] = useState<string>("All");
    const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

    const filteredQuestions = mockQuestions.filter(q => {
        if (activeTopic !== "All" && q.category !== activeTopic) return false;
        if (activePriority !== "All" && q.priority !== activePriority) return false;
        if (activeDistrict !== "All" && q.district !== activeDistrict) return false;
        return true;
    });

    const FilterPills = ({
        options,
        active,
        onChange
    }: {
        options: string[],
        active: string,
        onChange: (val: string) => void
    }) => (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            <button
                onClick={() => onChange("All")}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors border ${active === "All"
                        ? "bg-[var(--color-saffron)] text-white border-[var(--color-saffron)]"
                        : "bg-[var(--color-ink-3)] text-[var(--color-muted)] border-[var(--color-border)] hover:text-white"
                    }`}
            >
                {t.questions.filters.all}
            </button>
            {options.map(opt => (
                <button
                    key={opt}
                    onClick={() => onChange(opt)}
                    className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium font-hindi transition-colors border ${active === opt
                            ? "bg-[var(--color-saffron)] text-white border-[var(--color-saffron)]"
                            : "bg-[var(--color-ink-3)] text-[var(--color-muted)] border-[var(--color-border)] hover:text-white"
                        }`}
                >
                    {opt === "Urgent" ? "🔴 " : opt === "Medium" ? "🟡 " : opt === "Low" ? "🟢 " : ""}
                    {opt}
                </button>
            ))}
        </div>
    );

    return (
        <div className="flex h-full flex-col gap-6 animate-in fade-in duration-500 pb-20 md:pb-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold tracking-tight text-white">{t.questions.title}</h2>
                    <span className="rounded-full bg-[var(--color-ink-3)] px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
                        {mockQuestions.length} total
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 rounded-full bg-[var(--color-danger)]/10 px-3 py-1 text-xs font-medium text-[var(--color-danger)] border border-[var(--color-danger)]/20">
                        <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-danger)] animate-pulse" />
                        23 {t.questions.urgentAlert}
                    </div>
                    <Button variant="secondary" size="sm" className="gap-2 text-[var(--color-saffron)] border-[var(--color-saffron)]/30 hover:border-[var(--color-saffron)]">
                        <Download size={14} />
                        {t.questions.export}
                    </Button>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <FilterPills options={topics} active={activeTopic} onChange={setActiveTopic} />
                <FilterPills options={priorities} active={activePriority} onChange={setActivePriority} />
                <FilterPills options={districts} active={activeDistrict} onChange={setActiveDistrict} />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {filteredQuestions.map(q => (
                    <QuestionCard key={q.id} question={q} onClick={() => setSelectedQuestion(q)} />
                ))}
                {filteredQuestions.length === 0 && (
                    <div className="col-span-full flex h-40 items-center justify-center rounded-[10px] border border-dashed border-[var(--color-border)] text-sm text-[var(--color-muted)]">
                        No questions match selected filters.
                    </div>
                )}
            </div>

            <QuestionDrawer
                question={selectedQuestion}
                isOpen={!!selectedQuestion}
                onClose={() => setSelectedQuestion(null)}
                t={t}
            />
        </div>
    );
}
