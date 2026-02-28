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
    "बिजली": "var(--color-warning)",
    "किसान": "var(--color-positive)",
    "सड़क": "var(--color-info)", // Fallback if no specific blue
    "शिक्षा": "var(--color-muted)",
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
                "flex cursor-pointer flex-col gap-3 rounded-[10px] border border-[var(--color-border)] bg-[var(--color-ink-2)] p-4 transition-all duration-150 hover:border-[var(--color-saffron)] hover:bg-[var(--color-ink-3)]",
            )}
            style={{ borderLeftColor: priorityColor, borderLeftWidth: '2px' }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink-3)] text-[10px] font-bold text-white font-hindi">
                        {getInitials(question.voterName)}
                    </div>
                    <span className="text-[13px] font-bold text-white font-hindi">{question.voterName}</span>
                    <Badge variant="district" className="ml-1 px-1.5 py-0 text-[10px] font-hindi">
                        {question.district}
                    </Badge>
                </div>
                <span className="text-xs text-[var(--color-muted)]">{question.timestamp}</span>
            </div>

            <p className="text-[14px] leading-[1.6] text-white font-hindi line-clamp-2">
                {question.contentHi}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-1">
                <Badge variant="category" colorDot={categoryColorMap[question.category]}>
                    {question.category}
                </Badge>
                <Badge variant="priority" className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: priorityColor }} />
                    {question.priority}
                </Badge>
                <span className="text-[11px] font-medium text-[var(--color-muted)]">
                    {question.aiCategory}
                </span>
            </div>
        </div>
    );
}
