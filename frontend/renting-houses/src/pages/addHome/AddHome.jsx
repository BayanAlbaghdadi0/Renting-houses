import React from "react";
import { PiMapPinAreaFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsBuildingsFill } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
export const AddHome = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse mt-4 m-auto w-2/3"
      >
        <div className="collapse-title">There is little left</div>
        <div className="collapse-content">
          <p>
            Fill in the home details and the process will be completed
            successfully
          </p>
        </div>
      </div>
      <form className="space-y-4 flex flex-col items-center justify-center mt-4 w-full">
        <div className="">
          <div className="form-control w-full ">
            <input type="file" className="file-input file-input-bordered" />
          </div>
          <div className="form-control w-full">
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
        </div>

        <div className="flex flex-col gap-4 ">
          <label className="input input-bordered flex items-center gap-2">
            Salary
            <input type="number" className="grow" placeholder="$" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <PiMapPinAreaFill />
            <input type="number" className="grow" placeholder="Area" />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-4 ">
          <label className="input input-bordered flex items-center gap-2">
            <MdBedroomParent />
            <input type="number" className="grow" placeholder="5" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <BsBuildingsFill />
            <input type="number" className="grow" placeholder="flor hight" />
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">Description</label>
          <textarea
            className="textarea textarea-info"
            placeholder="Bio"
          ></textarea>
        </div>
        <Link to="/">
          <button className="btn btn-outline btn-success">Success</button>
        </Link>
      </form>
    </div>
  );
};
