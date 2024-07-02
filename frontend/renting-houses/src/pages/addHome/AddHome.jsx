<<<<<<< HEAD
import React, { useState, useContext } from 'react';

const FormContext = React.createContext();

function MyComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Damascus');
  const [salary, setSalary] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [floorHeight, setFloorHeight] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // يمكنك تخزين القيم في الـ context هنا
  };

  return (
    <FormContext.Provider
      value={{
        selectedFile,
        selectedCity,
        salary,
        area,
        bedrooms,
        floorHeight,
        description,
      }}
    >
      <form className="space-y-4 flex flex-col items-center justify-center mt-4 w-full">
        <div className="">
          <div className="form-control w-full ">
            <input
              type="file"
              className="file-input file-input-bordered"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
=======
import React from "react";
import { Link } from "react-router-dom";
import { PiMapPinAreaFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
export const AddHome = () => {
  return (
    <div className="mt-10 flex w-full  align-center ">
        
      <form className=" flex gap-5 justify-around flex-wrap   ">
        <div className="flex flex-col gap-4 w-1/3">
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
            className="file-input file-input-bordered file-input-success  "
          />
          <div className="flex gap-2 w-full m-auto h-full ">
            <label className="input input-bordered flex items-center gap-2">
              <MdBedroomParent />
              <input type="number" className="grow" placeholder="5" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <BsBuildingsFill />
              <input type="number" className="grow" placeholder="flor hight" />
            </label>
>>>>>>> 5f38a567ce4ffe2be86ae3ddad7792126166ccc6
          </div>
        </div>

        <div className=" flex flex-wrap gap-4 justify-evenly ">
          <div className="form-control  w-full">
            <label className="label">Select city</label>
            <select
              className="select select-secondary"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {/* ... options */}
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
          <div className="flex flex-col justify-between gap-4">
            <div className="form-control  ">
              <input type="file" className="file-input file-input-bordered" />
            </div>
            <div className="flex gap-1   ">
              <Link className="h-12 block w-2/3 " to="/">
                <button className="btn btn-outline btn-success w-full  ">
                  Success
                </button>
              </Link>
              <Link className="block w-1/3 " to="/dashboard">
                <button className="btn btn-outline w-full ">back</button>
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        <div className="flex flex-col gap-4 ">
          <label className="input input-bordered flex items-center gap-2">
            Salary
            <input
              type="number"
              className="grow"
              placeholder="$"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </label>
          {/* ... الحقول الأخرى */}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">Description</label>
          <textarea
            className="textarea textarea-info"
            placeholder="Bio"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {/* زر الإرسال */}
=======
>>>>>>> 5f38a567ce4ffe2be86ae3ddad7792126166ccc6
      </form>
    </FormContext.Provider>
  );
}
