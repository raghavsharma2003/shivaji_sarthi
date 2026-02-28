import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center gap-1.5 rounded-[6px] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors",
    {
        variants: {
            variant: {
                category: "bg-[var(--color-saffron-pale)] text-[var(--color-saffron)]",
                priority_high: "bg-[var(--color-red-light)] text-[var(--color-red)]",
                priority_med: "bg-[#FFF8E7] text-[#B8860B]",
                priority_low: "bg-[var(--color-green-light)] text-[var(--color-green)]",
                district: "bg-[var(--color-blue-light)] text-[var(--color-blue)] border border-[var(--color-blue)]/20",
                status: "bg-[var(--color-surface)] text-[var(--color-text-mid)] border border-[var(--color-border)]",
            },
        },
        defaultVariants: {
            variant: "category",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    dotColor?: string;
}

function Badge({ className, variant, dotColor, children, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {dotColor && (
                <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: dotColor }}
                />
            )}
            {children}
        </div>
    );
}

export { Badge, badgeVariants };
