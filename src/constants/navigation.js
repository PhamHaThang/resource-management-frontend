import {
  LayoutDashboard,
  Calendar,
  Package,
  Users,
  FileText,
  Bell,
  Folder,
} from "lucide-react";
import { ROLES } from "./roles";
export const NAVIGATION = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    roles: [ROLES.ADMIN],
  },
  {
    label: "Tài nguyên",
    path: "/resources",
    icon: Package,
    roles: [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT],
  },
  {
    label: "Booking",
    path: "/bookings",
    icon: Calendar,
    roles: [ROLES.ADMIN, ROLES.STUDENT, ROLES.TEACHER],
  },
  {
    label: "Báo cáo sự cố",
    path: "/issue-reports",
    icon: FileText,
    roles: [ROLES.ADMIN, ROLES.STUDENT, ROLES.TEACHER],
  },
  {
    label: "Người dùng",
    path: "/users",
    icon: Users,
    roles: [ROLES.ADMIN],
  },
  {
    label: "Loại tài nguyên",
    path: "/resource-types",
    icon: Folder,
    roles: [ROLES.ADMIN],
  },
];
