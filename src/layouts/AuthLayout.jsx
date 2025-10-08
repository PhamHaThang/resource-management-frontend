import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
