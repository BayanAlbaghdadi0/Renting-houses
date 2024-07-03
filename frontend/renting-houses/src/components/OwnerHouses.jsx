import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const fetchOwnerHouses = async () => {
  try {
    const response = await fetch(`http://localhost:5000/owner/owners`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch apartment");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching apartment:", error);
    return null;
  }
};

const HomeOwner = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwners = async () => {
      const data = await fetchOwnerHouses();
      console.log(data);
      if (data) {
        console.log(data);
        setOwners(data);
      }
    };

    fetchOwners();
  }, []);

  if (owners.length === 0) {
    return <div>No owners found</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th className="hidden md:block lg:block">Job</th>
            <th>Delete</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {owners.map((row) => (
            <tr key={row.id}>
              <th></th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={row.avatar} alt={`Avatar of ${row.name}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{row.name}</div>
                    <div className="text-sm opacity-50">{row.country}</div>
                  </div>
                </div>
              </td>
              <td className="hidden md:block lg:block">
                {row.company}
                <br />
                <span className="badge badge-ghast badge-sm">{row.job}</span>
              </td>
              <th className="">
                <button className="btn btn-circle btn-outline btn-sm hover:text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </th>
              <th className="flex gap-2">
                <Link to="/ownerdetails">
                  <button className="btn btn-ghost btn-xs hidden md:block lg:block">
                    details
                  </button>
                </Link>
                <Link to="/edit">
                  <button className="btn btn-outline btn-warning btn-xs">
                    Edit
                  </button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
};

export default HomeOwner;
