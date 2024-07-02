//liprary
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
//components
import { Signup } from "./pages/auth/signup/Signup";
import { Login } from "./pages/auth/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AddOwner } from "./pages/addowner/AddOwner";
import Home from "./pages/home/Home";
import { AddHome } from "./pages/addHome/AddHome";
import Detail from "./pages/detail/Detail";
import { Edit } from "./pages/edit/Edit";
import About from "./pages/about/About";
import { Ownerdetails } from "./pages/ownerdetails/Ownerdetails";
//hook -> SM
import { AuthProvider } from "./contexts/AuthContext";
// import {ApartmentProvider} from "./contexts/ApartmentContext";

function App() {
  return (
    <>
      <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/addowner" element={<AddOwner></AddOwner>}></Route>
            <Route path="/addhome" element={<AddHome />}></Route>
            <Route
              path="/detail/:apartmentId"
              element={<Detail></Detail>}
            ></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/edit" element={<Edit />}></Route>
            <Route path="/ownerdetails" element={<Ownerdetails />} />
          </Routes>
          <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
