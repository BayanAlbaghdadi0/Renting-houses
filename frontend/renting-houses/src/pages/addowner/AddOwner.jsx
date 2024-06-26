import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
export const AddOwner = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center mt-aut">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-xl shadow-black text-center">
          Welcome back
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-think text-slate-400 text-center drop-shadow-md shadow-blue-600/50">
          It looks like a new person will be joining us
        </p>
      </div>
      <form className="mt-4 m-auto flex flex-col gap-6 w-1/2  ">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="bayan" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="text" className="grow" placeholder="email@.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Phone Number
          <input type="text" className="grow" placeholder="09" />
        </label>
        <input
          type="file"
          className="file-input file-input-bordered file-input-success w-full "
        />
        <Link to="/addhome">
        <button className="btn btn-outline btn-success flex items-center w-1/2 m-auto font-bold p-2 ">
          next <GrLinkNext />
        </button>
        </Link>

      </form>
    </div>
  );
};
