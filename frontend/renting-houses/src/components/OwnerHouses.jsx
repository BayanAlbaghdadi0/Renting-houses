import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const data = [
  {
    id: 1,
    name: "Hart Hagerty",
    country: "United States",
    company: "Zemlak, Daniel and Leannon",
    job: "Desktop Support Technician",
    color: "Purple",
    avatar: "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png",
  },
  {
    id: 2,
    name: "Brice Swyre",
    country: "China",
    company: "Carroll Group",
    job: "Tax Accountant",
    color: "Red",
    avatar: "https://img.daisyui.com/tailwind-css-component-profile-3@56w.png",
  },
  {
    id: 3,
    name: "Marjy Ferencz",
    country: "Russia",
    company: "Rowe-Schoen",
    job: "Office Assistant I",
    color: "Crimson",
    avatar: "https://img.daisyui.com/tailwind-css-component-profile-4@56w.png",
  },
  {
    id: 4,
    name: "Yancy Tear",
    country: "Brazil",
    company: "Wyman-Ledner",
    job: "Community Outreach Specialist",
    color: "Indigo",
    avatar: "https://img.daisyui.com/tailwind-css-component-profile-5@56w.png",
  },
];

export const OwnerHouses = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th className="hidden md:block lg:block" >Job</th>
            <th >Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {data.map((row) => (
            <tr key={row.id}>
              <th>
                <button className="btn btn-circle btn-outline hover:text-red-600">
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
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={row.avatar} alt={`Avatar of ${row.name}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{row.name}</div>
                    <div className="text-sm opacity-50  ">{row.country}</div>
                  </div>
                </div>
              </td>
              <td className="hidden md:block lg:block">
                {row.company}
                <br />
                <span className="badge badge-ghost badge-sm">{row.job}</span>
              </td>
              <td className="">{row.color}</td>
              <th className="flex gap-2 ">
                <button className="btn btn-ghost btn-xs hidden md:block lg:block ">details</button>
                <button className="btn btn-outline btn-warning btn-xs ">Edit</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
