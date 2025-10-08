import { User } from "lucide-react";
import { cn } from "../../utils/cn";

export const Avatar = ({ src, fallback, size = "md", className }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  if (src) {
    return (
      <img
        src={src}
        alt="Avatar"
        className={cn(
          "rounded-full object-cover",
          sizeClasses[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-medium",
        sizeClasses[size],
        className
      )}>
      {fallback ? fallback : <User size={size === "sm" ? 16 : 20} />}
    </div>
  );
};
