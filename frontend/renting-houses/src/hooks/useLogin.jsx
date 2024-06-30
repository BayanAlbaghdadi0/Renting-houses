import toast from "react-hot-toast";
import { useAuth } from "./useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [loading, setLoggedIn] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate(); // useNavigate 

  const login = async ({ username, password }) => {
    console.log({ username, password });
    const success = handleInputError({ username, password });
    if (!success) {
      return;
    }
    setLoggedIn(true);
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json(); //   

      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("role", data.role); // `data.role` 
      setUser(data);
      console.log("====================");

      // Navigate to the home page if everything is successful
      navigate("/");

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoggedIn(false);
    }
  };

  return { loading, login };
};

function handleInputError({ username, password }) {
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