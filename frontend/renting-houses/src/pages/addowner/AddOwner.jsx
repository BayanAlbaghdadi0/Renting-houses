<<<<<<< HEAD
import React, { useState, useContext } from 'react';

const FormContext = React.createContext();

function MyComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // ... الحالات الأخرى

  const handleSubmit = () => {
    // قم بتخزين الحالات في الـ context
    // يمكنك إنشاء كائن يحتوي على جميع البيانات وتخزينه في الـ context
    const formData = {
      name,
      email,
      phoneNumber,
      // ... البيانات الأخرى
    };
    // قم بتخزين البيانات في context
    // يمكنك استخدام setState من useContext لتحديث حالة الـ context
  };

  return (
    <FormContext.Provider value={{ name, email, phoneNumber }}>
      <form className="mt-4 m-auto flex flex-col gap-6 w-1/2">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            className="grow"
            placeholder="bayan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="text"
            className="grow"
            placeholder="email@.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Phone Number
          <input
            type="text"
            className="grow"
            placeholder="09"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        {/* إضافة المزيد من الحقول هنا */}
        <button
          onClick={handleSubmit}
          className="btn btn-outline btn-success flex items-center w-1/2 m-auto font-bold p-2"
        >
          next
        </button>
=======
import React from "react";
import { Link } from "react-router-dom";
import { PiMapPinAreaFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
export const AddOwner = () => {
  return (
    <div className="mt-10 flex w-full  align-center ">
        
      <form className=" flex gap-5 justify-around flex-wrap w-full  ">
        <div className="flex flex-col gap-4 w-1/3">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow " placeholder="bayan" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="email@" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Phone Number
            <input type="text" className="grow " placeholder="09" />
          </label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-success w-full "
          />
          <div className="flex gap-2 flex-col w-full ">
            <label className="input input-bordered flex items-center gap-2">
              <MdBedroomParent />
              <input type="number" className="grow" placeholder="5" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <BsBuildingsFill />
              <input type="number" className="grow" placeholder="flor hight" />
            </label>
          </div>
        </div>

        <div className=" flex flex-wrap gap-4 justify-evenly  ">
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
            <label className="input input-bordered flex items-center  gap-2">
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
>>>>>>> 5f38a567ce4ffe2be86ae3ddad7792126166ccc6
      </form>
    </FormContext.Provider>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 5f38a567ce4ffe2be86ae3ddad7792126166ccc6
