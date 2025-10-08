import { useState, useEffect } from "react";
import { getCurrentUser } from "../api/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await getCurrentUser();
          setUser(response.data.data);
        } catch (error) {
          console.error("Failed to fetch user:", error);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/auth/login";
  };
  const value = { user, loading, login, logout };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
