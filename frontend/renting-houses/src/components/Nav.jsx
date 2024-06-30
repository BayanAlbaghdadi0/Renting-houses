import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Header = () => {
  const { user } = useAuth();
  return (
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
            {user && user.role === 'admin' && (
            <Link to="/dashboard">
              <button className="btn btn-outline btn-secondary btn-sm">Dashboard</button>
            </Link>
          )}
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
            <button className="btn btn-outline btn-sm">login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-outline btn-info btn-sm">Signup</button>
          </Link>
          {user && user.role === 'admin' && (
            <Link to="/dashboard">
              <button className="btn btn-outline btn-secondary btn-sm">Dashboard</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
