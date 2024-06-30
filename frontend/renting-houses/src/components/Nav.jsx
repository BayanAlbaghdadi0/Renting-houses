import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Header = () => {
  const { user } = useAuth();
  return (
<<<<<<< HEAD
    <div className="navbar bg-base-100 mx-auto px-10">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/about">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/about">
                login
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/about">
                Signup
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/about">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">company</a>
      </div>
      <div className="navbar-center hidden justify-between lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/">
              HOME
            </Link>
          </li>
          <li> <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/about">
            ABOUT US
          </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="flex items-center gap-2 ">
          <Link className="hover:text-blue-500 text-white font-extrabold" to="/login">
=======
    <header className=" shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://placehold.co/200x200"
            alt="Logo"
            className="h-10 w-10 mr-4"
          />
          <h1 className="font-bold text-lg text-white">Your Company</h1>
        </div>
        <nav className="space-x-6 text-white">
          <Link
            className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4"
            to="/"
          >
            HOME
          </Link>
          <Link
            className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4"
            to="/about"
          >
            ABOUT US
          </Link>
          <Link
            className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4"
            to="/contact"
          >
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center gap-2 ">
          <Link
            className="hover:text-blue-500 text-white font-extrabold"
            to="/login"
          >
>>>>>>> cbddda08abbef4ea7bda4b2be9462f16a44d6613
            <button className="btn btn-outline btn-sm">login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-outline btn-info btn-sm">Signup</button>
<<<<<<< HEAD
          </Link>
          <Link to="/dashboard">
            <button className="btn btn-outline btn-secondary btn-sm">Dashboard</button>
=======
>>>>>>> cbddda08abbef4ea7bda4b2be9462f16a44d6613
          </Link>
          {user && user.role === "admin" && (
            <Link to="/dashboard">
              <button className="btn btn-outline btn-secondary btn-sm">
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
