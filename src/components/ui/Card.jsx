import { cn } from "../../utils/cn";
export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-neutral-200 shadow-sm",
        className
      )}
      {...props}>
      {children}
    </div>
  );
};
export const CardHeader = ({ title, description, actions, className }) => {
  return (
    <div className={cn("px-6 py-5 border-b border-neutral-200", className)}>
      <div className="flex items-center justify-between">
        <div>
          {title && (
            <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
          )}
          {description && (
            <p className="text-sm text-neutral-500 mt-1">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
};
export const CardContent = ({ className, children }) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};
