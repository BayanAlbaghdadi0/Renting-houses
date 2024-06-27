import React from "react";
import { Link } from "react-router-dom";
import { PiMapPinAreaFill } from "react-icons/pi";

export const Edit = () => {
  return (
    <div className="mt-10 flex w-full  align-center ">
      <form className=" flex gap-5 justify-around flex-wrap   ">
        <div className="flex flex-col gap-4">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow " placeholder="bayan" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="email@.com" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Phone Number
            <input type="text" className="grow " placeholder="09" />
          </label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-success w-full "
          />
        </div>

        <div className=" flex flex-wrap gap-4 justify-evenly ">
          <div className="form-control  w-full">
            <label className="label">Select city</label>
            <select className="select select-secondary">
              <option disabled selected>
                Damascus
              </option>
              <option>Damascus</option>
              <option>Homs</option>
              <option>Aleppo</option>
              <option>Latakia</option>
              <option>Daraa</option>
              <option>Hama</option>
              <option>Sweida</option>
              <option>Tartous</option>
              <option>Deir ez-Zor</option>
              <option>Raqqa</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 ">
            <label className="input input-bordered flex items-center gap-2">
              Salary
              <input type="" className="grow" placeholder="$" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <PiMapPinAreaFill />
              <input type="" className="grow" placeholder="Area" />
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">Description</label>
            <textarea
              className="textarea textarea-info"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="flex flex-col justify-between">
            <div className="form-control  ">
              <input type="file" className="file-input file-input-bordered" />
            </div>
            <Link className="h-12 block  " to="/">
              <button className="btn btn-outline btn-success  w-full ">
                Success
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
