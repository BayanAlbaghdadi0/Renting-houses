import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiMapPinAreaFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
import axios from "axios";
export const Edit = ({ ownerId }) => {
  

  const [owner, setOwner] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    RoomNumber: "",
    FloorNumber: "",
    City: "",
    Salary: "",
    Area: "",
    Descrebtion: "",
  });

  useEffect(() => {
    axios.get(`http:/localhost:5000/owner/${ownerId}`)
      .then((response) => {
        setOwner(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ownerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOwner((prevOwner) => ({
      ...prevOwner,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http:/localhost:5000/owner/${ownerId}`, owner)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div className="mt-10 flex w-full  align-center ">
        
      <form className=" flex gap-5 justify-around flex-wrap " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-1/3">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow " placeholder="bayan"   onChange={handleChange} value={owner.username}/>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="email@.com" onChange={handleChange} value={owner.email}/>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Phone Number
            <input type="text" className="grow " placeholder="09" onChange={handleChange} value={owner.phoneNumber}/>
          </label>
          {/* <input
            type="file"
            className="file-input file-input-bordered file-input-success w-full "onChange={handleChange} value={owner.pictures}
          /> */}
          <div className="flex gap-2 ">
            <label className="input input-bordered flex items-center gap-2">
              <MdBedroomParent />
              <input type="number" className="grow" placeholder="5"onChange={handleChange} value={owner.RoomNumber} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <BsBuildingsFill />
              <input type="number" className="grow" placeholder="flor hight" onChange={handleChange} value={owner.FloorNumber}/>
            </label>
          </div>
        </div>

        <div className=" flex flex-wrap gap-4 justify-evenly ">
        <div className="flex gap-2 ">
            <label className="input input-bordered flex items-center gap-2">
             
              <input type="text" className="grow" placeholder="city"onChange={handleChange} value={owner.City} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <BsBuildingsFill />
              <input type="number" className="grow" placeholder="flor hight" onChange={handleChange} value={owner.FloorNumber}/>
            </label>
          </div>
          <div className="flex flex-col gap-4 ">
            <label className="input input-bordered flex items-center gap-2">
              Salary
              <input type="number" className="grow" placeholder="$" value={owner.Salary} onChange={handleChange}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <PiMapPinAreaFill />
              <input type="te" className="grow" placeholder="Area" onChange={handleChange} value={owner.Area}/>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">Description</label>
            <textarea
              className="textarea textarea-info"
              placeholder="Bio"onChange={handleChange} value={owner.Descrebtion}
            ></textarea>
          </div>
          <div className="flex flex-col justify-between gap-4">
            {/* <div className="form-control  ">
              <input type="file" className="file-input file-input-bordered" onChange={handleChange} value={owner.apartmentprice}/>
            </div> */}
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
      </form>
    </div>
  );
};
