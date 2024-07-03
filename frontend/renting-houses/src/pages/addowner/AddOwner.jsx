import React from "react";
import { Link } from "react-router-dom";
import { PiMapPinAreaFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { useState } from "react";
import { MdBedroomParent } from "react-icons/md";
import { useAddOwner } from "../../hooks/useAddowner";
export const AddOwner = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    phoneNumber:"",
    RoomNumber:"",
    FloorNumber:"",
    City:"",
    Salary:"",
    Area:"",
    Descrebtion:"",
  });
  const { loading, AddOwnerfunction } = useAddOwner();
  const handelSupmit = async (e) => {
    e.preventDefault();
    await AddOwnerfunction(inputs);
  };
  return (
    <div className="mt-10 flex w-full  align-center ">
        
      <form className=" flex gap-5 justify-around flex-wrap   ">
        <div className="flex flex-col gap-4 w-1/3">
          <label  className="input input-bordered flex items-center gap-2">
            Name
            <input value={inputs.username} onChange={e=>setInputs({...inputs,username:e.target.value})} type="text" className="grow " placeholder="bayan" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input value={inputs.email} onChange={e=>setInputs({...inputs,email:e.target.value})} type="text" className="grow" placeholder="email@.com" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Phone Number
            <input value={inputs.phoneNumber} onChange={e=>setInputs({...inputs,phoneNumber:e.target.value})} type="text" className="grow " placeholder="09" />
          </label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-success w-full "
          />
          <div className="flex gap-2 ">
            <label className="input input-bordered flex items-center gap-2">
              <MdBedroomParent />
              <input value={inputs.RoomNumber} onChange={e=>setInputs({...inputs,RoomNumber:e.target.value})} type="number" className="grow" placeholder="5" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <BsBuildingsFill />
              <input value={inputs.FloorNumber} onChange={e=>setInputs({...inputs,FloorNumber:e.target.value})} type="number" className="grow" placeholder="flor hight" />
            </label>
          </div>
        </div>

        <div className=" flex flex-wrap gap-4 justify-evenly ">
          <div className="form-control  w-full">
            <label className="label">Select city</label>
            <select className="select select-secondary" value={inputs.City} onChange={e=>setInputs({...inputs,City:e.target.value})}>
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
              <input value={inputs.Salary} onChange={e=>setInputs({...inputs,Salary:e.target.value})} type="" className="grow" placeholder="$" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <PiMapPinAreaFill />
              <input value={inputs.Area} onChange={e=>setInputs({...inputs,Area:e.target.value})} type=""  className="grow" placeholder="Area" />
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">Description</label>
            <textarea
            value={inputs.Descrebtion} onChange={e=>setInputs({...inputs,Descrebtion:e.target.value})}
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
                <button className="btn btn-outline btn-success w-full  " onClick={handelSupmit}>
                  Success
                </button>
              </Link>
              <Link className="block w-1/3 " to="/dashboard">
                <button className="btn btn-outline w-full ">back</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
