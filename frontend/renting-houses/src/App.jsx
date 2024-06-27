import {Routes,Route} from "react-router-dom"
import { Signup } from "./pages/auth/signup/Signup";
import { Login } from "./pages/auth/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AddOwner } from "./pages/addowner/AddOwner";
import Home from "./pages/home/Home";
import { AddHome } from "./pages/addHome/AddHome";
import { Edit } from "./pages/edit/Edit";

function App() {
  return (
    <>
   <Routes>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    <Route path="/addowner" element={<AddOwner></AddOwner>}></Route>
    <Route path="/addhome" element={<AddHome/>}></Route>
    <Route path="/edit" element={<Edit/>}></Route>
   </Routes>
    </>
    
  );
}

export default App;
