import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiMapPinAreaFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
import axios from "axios";
export const Edit = ({ id }) => {
  

  const [appartmentandowner, setAppartmentandowner] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    username: "",

    phone: "",
    apartmentprice: "",
    apartmentdescription: "",
    appartmentLocation: "",
    appartmentarea: "",
    countRoom: "",
    FloorHight: "",
    ownerid: "",
  });

  useEffect(() => {
    axios.get(`/api/appartments/${id}`).then((res) => {
      setAppartment(res.data);
      setFormData(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/appartments/${id}`, formData).then((res) => {
      setAppartment(res.data);
    });
  };




  return (
    <div className="mt-10 flex w-full  align-center ">
        
      <form className=" flex gap-5 justify-around flex-wrap " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-1/3">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow " placeholder="bayan"   onChange={handleChange} value={formData.username}/>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="email@.com" onChange={handleChange} value={formData.email}/>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Phone Number
            <input type="text" className="grow " placeholder="09" onChange={handleChange} value={formData.phone}/>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-success w-full "onChange={handleChange} value={formData.pictures}
          />
          <div className="flex gap-2 ">
            <label className="input input-bordered flex items-center gap-2">
              <MdBedroomParent />
              <input type="number" className="grow" placeholder="5"onChange={handleChange} value={formData.countRoom} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <BsBuildingsFill />
              <input type="number" className="grow" placeholder="flor hight" onChange={handleChange} value={formData.apartmentdescription}/>
            </label>
          </div>
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
              <input type="" className="grow" placeholder="$" value={formData.apartmentprice} onChange={handleChange}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <PiMapPinAreaFill />
              <input type="" className="grow" placeholder="Area" onChange={handleChange} value={formData.apartmentprice}/>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">Description</label>
            <textarea
              className="textarea textarea-info"
              placeholder="Bio"onChange={handleChange} value={formData.des}
            ></textarea>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="form-control  ">
              <input type="file" className="file-input file-input-bordered" onChange={handleChange} value={formData.apartmentprice}/>
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
      </form>
    </div>
  );
};
