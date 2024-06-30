import toast from "react-hot-toast";
import {useAuth} from "./useAuth";

 const useSignup = () => {
  const [loading, setLoggedIn] = useState(false);
  const { setUser } = useAuth();
  const signup = async ({ userName, email, password, phone }) => {
    const success = handelInputError({
      userName,
      email,
      password,
      phone,
    });
    if (!success) {
      return;
    }
    setLoggedIn(true);
    try {
      const res = await fetch(`/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
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
    }
  };
  return {loading ,signup}
};
export default useSignup

function handelInputError({ userName, password, email, phone }) {
  if (!email || !userName || !password || !phone) {
    toast.error("pleas fill in all fialds");
    return false;
  }
  if (password.length < 6) {
    toast.error("password is short");
    return false;
  }
  return true;
}
