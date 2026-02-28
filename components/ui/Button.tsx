import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-[var(--color-saffron)] text-white hover:bg-[var(--color-saffron-2)]",
                secondary: "bg-[var(--color-ink-3)] text-white border border-[var(--color-border)] hover:bg-[var(--color-ink-2)]",
                ghost: "bg-transparent text-[var(--color-muted)] hover:bg-[var(--color-ink-3)] text-white",
                danger: "bg-[var(--color-danger)] text-white hover:bg-[var(--color-danger)]/90",
            },
            size: {
                sm: "h-8 rounded-md px-3 text-xs",
                md: "h-10 rounded-md px-4 py-2",
                lg: "h-12 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, loading, children, ...props }, ref) => {
        // We don't have standard Radix setup yet, so we'll just use button if not asChild
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={loading || props.disabled}
                {...props}
            >
                {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {loading && children ? <span className="opacity-0">{children}</span> : children}
                {loading && !children && "Loading..."}
                {/* If we have children and are loading, the structure might be a bit off, best to conditionally show children or spinner */}
                {/* Actually, let's keep it simple: */}
                {/* Replace content with spinner conceptually, but keep width. Above trick works okay, but standard is just: */}
            </Comp>
        )
    }
);

// Better button implementation that handles loading properly while maintaining dimensions
const ButtonBetter = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, loading, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={loading || props.disabled}
                {...props}
            >
                {loading && <Loader2 className="absolute h-4 w-4 animate-spin" />}
                <span className={cn(loading && "opacity-0", "flex items-center justify-center gap-2")}>
                    {children}
                </span>
            </button>
        );
    }
);
ButtonBetter.displayName = "Button";

export { ButtonBetter as Button, buttonVariants };
