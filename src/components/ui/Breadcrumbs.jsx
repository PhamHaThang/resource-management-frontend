import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight size={16} className="mx-1 text-neutral-400" />
          )}
          {item.path && index < items.length - 1 ? (
            <Link
              to={item.path}
              className="text-neutral-600 hover:text-primary-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-neutral-800">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};
