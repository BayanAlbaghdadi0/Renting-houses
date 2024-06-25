import {Routes,Route} from "react-router-dom"
import { Signup } from "./pages/auth/signup/Signup";
import { Login } from "./pages/auth/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
   <Routes>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
   </Routes>
    </>
    
  );
}

export default App;
