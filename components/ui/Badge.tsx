import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-[6px] border px-2.5 py-0.5 text-[12px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                category:
                    "border-transparent bg-[var(--color-ink-3)] text-white",
                priority:
                    "border-transparent bg-[var(--color-ink-3)] text-white",
                district:
                    "border-[var(--color-border)] text-white bg-transparent",
                status:
                    "border-transparent text-white",
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
    colorDot?: string;
}

function Badge({ className, variant, colorDot, children, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {colorDot && (
                <span
                    className="mr-1.5 h-2 w-2 rounded-full"
                    style={{ backgroundColor: colorDot }}
                />
            )}
            {children}
        </div>
    );
}

export { Badge, badgeVariants };
