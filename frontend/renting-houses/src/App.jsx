import {Routes,Route} from "react-router-dom"
import { Signup } from "./pages/auth/signup/Signup";
import { Login } from "./pages/auth/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AddOwner } from "./pages/addowner/AddOwner";
import Home from "./pages/home/Home";
import { AddHome } from "./pages/addHome/AddHome";
<<<<<<< HEAD
import Detail from "./pages/home/detail/Detail";
=======
import { Edit } from "./pages/edit/Edit";
>>>>>>> 2d3fdbf290a4caa32684706b61fcd864e191793f

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
<<<<<<< HEAD
    <Route path="/detail" element={<Detail></Detail>}></Route>
=======
    <Route path="/edit" element={<Edit/>}></Route>
>>>>>>> 2d3fdbf290a4caa32684706b61fcd864e191793f
   </Routes>
    </>
    
  );
}

export default App;
