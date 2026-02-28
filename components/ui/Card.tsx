import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] text-[var(--color-text-main)] transition-shadow hover:shadow-[var(--shadow-md)]",
            className
        )}
        {...props}
    />
));
Card.displayName = "Card";

export { Card };
