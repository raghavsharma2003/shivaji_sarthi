import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-[12px] text-sm font-semibold ring-offset-[var(--color-off-white)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-saffron)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
    {
        variants: {
            variant: {
                primary: "bg-[var(--color-saffron)] text-white hover:bg-[var(--color-saffron-lt)] shadow-[0_4px_14px_rgba(232,98,26,0.3)]",
                secondary: "bg-[var(--color-surface)] border-2 border-[var(--color-border)] text-[var(--color-text-mid)] hover:border-[var(--color-saffron)] hover:text-[var(--color-saffron)] hover:bg-[var(--color-saffron-pale)]",
                ghost: "bg-transparent text-[var(--color-text-soft)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-main)]",
                danger: "bg-[var(--color-red-light)] text-[var(--color-red)] hover:bg-[var(--color-red)] hover:text-white",
            },
            size: {
                sm: "h-9 px-4 text-xs",
                md: "h-11 px-6",
                lg: "h-14 px-8 text-base rounded-[16px]",
                icon: "h-11 w-11",
            },
            fullWidth: {
                true: "w-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            fullWidth: false,
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, fullWidth, isLoading, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, fullWidth, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
