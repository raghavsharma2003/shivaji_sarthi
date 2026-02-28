import { Question } from "@/lib/types";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

const priorityColorMap: Record<string, string> = {
    Urgent: "var(--color-danger)",
    Medium: "var(--color-warning)",
    Low: "var(--color-positive)",
};

const categoryColorMap: Record<string, string> = {
    "रोज़गार": "var(--color-saffron)",
    "बिजली": "var(--color-red)",
    "किसान": "var(--color-green)",
    "सड़क": "var(--color-blue)",
    "शिक्षा": "var(--color-gold)",
};

export function QuestionCard({
    question,
    onClick
}: {
    question: Question;
    onClick: () => void;
}) {
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2);
    };

    const priorityColor = priorityColorMap[question.priority] || "transparent";

    return (
        <div
            onClick={onClick}
            className={cn(
                "flex cursor-pointer flex-col gap-3 rounded-[10px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm p-4 transition-all duration-150 hover:border-[var(--color-saffron)] hover:bg-[var(--color-surface-hover)]",
            )}
            style={{ borderLeftColor: priorityColor, borderLeftWidth: '2px' }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-white)] border border-[var(--color-border)] text-[10px] font-bold text-[var(--color-text-main)] font-hindi">
                        {getInitials(question.voterName)}
                    </div>
                    <span className="text-[13px] font-bold text-[var(--color-text-main)] font-hindi">{question.voterName}</span>
                    <Badge variant="district" className="ml-1 px-1.5 py-0 text-[10px] font-hindi">
                        {question.district}
                    </Badge>
                </div>
                <span className="text-xs font-semibold text-[var(--color-text-soft)]">{question.timestamp}</span>
            </div>

            <p className="text-[14px] leading-[1.6] text-[var(--color-text-main)] font-hindi line-clamp-2">
                {question.contentHi}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-1">
                <Badge variant="category" dotColor={categoryColorMap[question.category]}>
                    {question.category}
                </Badge>
                <Badge variant={question.priority === "Urgent" ? "priority_high" : question.priority === "Medium" ? "priority_med" : "priority_low"} className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: priorityColor }} />
                    {question.priority}
                </Badge>
                <span className="text-[11px] font-bold text-[var(--color-text-soft)]">
                    {question.aiCategory}
                </span>
            </div>
        </div>
    );
}
