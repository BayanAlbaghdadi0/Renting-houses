import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { CiLogout } from "react-icons/ci";
export const Sidebar = () => {
  const { loading, logout } = useLogout();

  return (
    // <div className="drawer drawer-mobile">
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Admin</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <Link to="/addowner">
                    <button className="btn btn-outline btn-primary  btn-sm">
                      Add
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button className="btn btn-outline btn-secondary  btn-sm">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link>
                    <button className="btn btn-outline btn-error  btn-sm">
                      {!loading ? (
                        <CiLogout
                          onClick={logout}
                          className="w-6 h-6 text-white cursor-pointer"
                        />
                      ) : (
                        <span className="loading loading-spinner"></span>
                      )}
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side z-50 ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100  min-h-full w-80 p-4 flex flex-col gap-2 ">
            {/* Sidebar content here */}
            <li>
              <div className="avatar">
                <div className="w-16 rounded">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </li>
            <li>
              <Link to="/">
                <button className="btn btn-outline btn-secondary  btn-sm">
                  Home
                </button>
              </Link>
            </li>
            <li className="">
              <Link to="/">
                <button className="btn  btn-outline btn-primary btn-sm ml-1">
                  Add
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button className="btn btn-outline btn-error  ">
                  {!loading ? (
                    <CiLogout
                      onClick={logout}
                      className="w-6 h-6 text-white cursor-pointer"
                    />
                  ) : (
                    <span className="loading loading-spinner"></span>
                  )}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
