import { forwardRef } from "react";
import { Search, X } from "lucide-react";
import { cn } from "../../utils/cn";

export const SearchInput = forwardRef(
  ({ className, onClear, value, ...props }, ref) => {
    return (
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
          size={18}
        />
        <input
          ref={ref}
          type="text"
          value={value}
          className={cn(
            "w-full pl-10 pr-10 py-2 rounded-lg border border-neutral-200 bg-white text-sm",
            "focus:outline-none focus:ring-2 focus:ring-primary-500",
            "placeholder:text-neutral-400",
            className
          )}
          {...props}
        />
        {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
            <X size={18} />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
