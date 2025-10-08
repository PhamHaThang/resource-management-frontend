import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const Select = forwardRef(
  ({ className, options = [], ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "w-full px-3 py-2 rounded-lg border bg-white text-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary-500",
          "border-neutral-200",
          className
        )}
        {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";
