import { ChevronDown, LogOut, User as UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Avatar } from "./ui/Avatar";
import { DropdownMenu } from "./ui/DropdownMenu";
export const Topbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const userMenuItems = [
    {
      label: "Trang cá nhân",
      icon: UserIcon,
      onClick: () => navigate("/profile"),
    },
    {
      label: "Đăng xuất",
      icon: LogOut,
      onClick: logout,
      danger: true,
    },
  ];
  return (
    <header className="h-16 bg-white border-b border-neutral-200 px-6 flex items-center justify-end">
      <div className="flex items-center gap-4">
        <DropdownMenu
          trigger={
            <div className="flex items-center gap-3 cursor-pointer">
              <Avatar
                src={user?.avatar}
                fallback={user?.name?.charAt(0)?.toUpperCase()}
                size="sm"
              />
              <div>
                <p className="text-sm font-medium text-neutral-800">
                  {user?.name}
                </p>
                <p className="text-xs text-neutral-500 capitalize">
                  {user?.role}
                </p>
              </div>
              <ChevronDown size={16} className="text-neutral-500" />
            </div>
          }
          items={userMenuItems}
        />
      </div>
    </header>
  );
};
