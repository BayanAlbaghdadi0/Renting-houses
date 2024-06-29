import React from "react";

export const Ownerdetails = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">bayan Albaghdadi</h2>
          <p>0937138747</p>
          <p className="flex items-center text-xl  font-bold drop-shadow-sm shadow-lg">bayanAl3amm@gmail.com</p>
          <p className="flex items-center text-xl  font-bold drop-shadow-sm shadow-lg">count of houses : 2 </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary hover:btn-secondary ">back</button>
          </div>
        </div>
      </div>
    </div>
  );
};
