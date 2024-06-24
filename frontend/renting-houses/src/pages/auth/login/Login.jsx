import React from "react";
import { Link } from "react-router-dom";
import houseImage from "../../../assets/matt-mutlu-unsplash.jpg";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    username:"",
    password:""
  })
  return (
    <div className="flex h-screen">
    <div className="hidden md:flex w-1/2 h-5/6 m-auto">
      <img
        src={houseImage}
        alt="house"
        className="object-cover w-full h-full rounded-lg ml-8"
      />
    </div>
    <div className="flex justify-center items-center w-full md:w-1/2">
      <form className="w-full max-w-md p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-extrabold [text-shadow:1px_1px_5px_#3333ff]">
          Login
        </h1>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="w-full shadow-lg shadow-slate-800"
            placeholder="Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </label>
        
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow w-full shadow-lg shadow-slate-800"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>
        <p className="text-lg text-center font-medium  mt-4 hover:[text-shadow:1px_1px_5px_#3333ff]">If dont you have an account you can Signup 🌌</p>
        <Link className="block w-1/2 m-auto" to="/signup">
          <button onClick={console.log(user)} className="w-full btn btn-outline mt-3">Signup</button>
        </Link>
        <Link className="block w-1/2 m-auto" to="/">
        <button className="btn btn-outline btn-info w-full mt-3">back to home</button>
        </Link>
      </form>
    </div>
  </div>
  );
};
