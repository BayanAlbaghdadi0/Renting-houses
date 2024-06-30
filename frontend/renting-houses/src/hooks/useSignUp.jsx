import toast from "react-hot-toast";
import {useAuth} from "./useAuth";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const useSignup = () => {
  const [loading, setLoggedIn] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  // username, email, password, phone
  const signup = async ({ username, email, password, phone }) => {
    const success = handelInputError({
      username,
      email,
      password,
      phone,
    });
    if (!success) {
      return;
    }
    setLoggedIn(true);
    try {
      const res = await fetch(`http://localhost:5000/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          phone,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoggedIn(false);
      navigate('/')
    }
  };
  return {loading ,signup}
};
function handelInputError({ username, password, email, phone }) {
  if (!email || !username || !password || !phone) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password is too short");
    return false;
  }
  return true;
}