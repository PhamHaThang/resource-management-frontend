import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const Input = forwardRef(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full px-3 py-2 rounded-lg border bg-white text-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
          "disabled:bg-neutral-50 disabled:cursor-not-allowed",
          error ? "border-danger focus:ring-danger" : "border-neutral-200",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
