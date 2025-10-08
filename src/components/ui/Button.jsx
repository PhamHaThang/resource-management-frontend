import { forwardRef } from "react";
import { cn } from "../../utils/cn";
const variants = {
  primary: "bg-primary-600 text-white hover:bg-primary-700",
  outline:
    "border border-neutral-200 bg-transparent text-neutral-700 hover:bg-neutral-100",
  ghost: "text-neutral-600 hover:bg-neutral-100",
  danger: "bg-danger text-white hover:bg-red-700",
};
const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};
export const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ring-offset-2",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
