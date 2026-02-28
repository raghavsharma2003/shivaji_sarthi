import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-[10px] border border-[var(--color-border)] bg-[var(--color-ink-2)] text-white p-5 hover-card-transition",
                className
            )}
            style={{
                transition: "background-color 150ms ease",
            }}
            {...props}
        />
    )
)
Card.displayName = "Card"

export { Card }
