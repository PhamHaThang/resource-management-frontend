import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";
import WelcomePage from "../pages/WelcomePage";
import ResourceListPage from "../pages/resources/ResourceListPage";
import { ResourceDetailPage } from "../pages/resources/ResourceDetailPage";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "resources", element: <ResourceListPage /> },
      { path: "resources/:id", element: <ResourceDetailPage /> },
    ],
  },
]);
