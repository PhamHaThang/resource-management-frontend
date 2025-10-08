import { Link, useLocation } from "react-router-dom";
import { Package } from "lucide-react";
import { NAVIGATION } from "../constants/navigation";
import { useAuth } from "../hooks/useAuth";
import { cn } from "../utils/cn";
import Logo from "../assets/logo.png";
export const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const filteredNavigation = NAVIGATION.filter((item) =>
    item.roles.includes(user?.role)
  );
  return (
    <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col">
      <div className="p-4 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12  rounded-lg flex items-center justify-center">
            <img src={Logo} alt="Logo" />
          </div>
          <h1 className="font-semibold text-sm text-neutral-900">
            Hệ thống quản lý tài nguyên học viện
          </h1>
        </div>
      </div>{" "}
      <nav className="flex-1 p-4 space-y-1">
        {filteredNavigation.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm",
                isActive
                  ? "bg-primary-50 text-primary-700 font-medium"
                  : "text-neutral-600 hover:bg-neutral-50"
              )}>
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
