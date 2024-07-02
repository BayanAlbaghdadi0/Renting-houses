import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-hot-toast"; // toast is imported
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Network response was not ok.");
      }

      console.log(data);
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      setUser(null);
      toast.success("Logged out successfully");
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};