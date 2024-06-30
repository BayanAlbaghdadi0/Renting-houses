import toast from "react-hot-toast";
import { useAuth } from "./useAuth";
import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoggedIn] = useState(false);
  const { setUser } = useAuth();

  const login = async ({ username, password }) => {
    const seccus = handelInputError({
      username,
      password,
    });
    if (!success) {
      return;
    }
    setLoggedIn(true);
    try {
      await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      
      localStorage.setItem("role", data.role);
      setUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoggedIn(false);
    }
  };
  return { loading, login };
};

function handelInputError({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password is too short");
    return false;
  }
  return true;
}
