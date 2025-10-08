import { cn } from "../../utils/cn";

const toneStyles = {
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800",
  neutral: "bg-neutral-100 text-neutral-800",
  primary: "bg-primary-100 text-primary-800",
};

export const StatusPill = ({ tone = "neutral", children }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        toneStyles[tone]
      )}>
      {children}
    </span>
  );
};
