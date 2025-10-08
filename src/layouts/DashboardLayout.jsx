import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function DashboardLayout() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Đang tải...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <div className="flex h-screen bg-neutral-100">
      {/* Sidebar*/}
      <div className="w-64 bg-white border-r">Sidebar</div>
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b">Topbar</header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
