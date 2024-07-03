import React, { useState, useEffect } from "react";
import {
  FaMapMarker,
  FaBuilding,
  FaRuler,
  FaBed,
  FaDollarSign,
} from "react-icons/fa";

const Filter = () => {
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [floor, setFloor] = useState("");
  const [price, setPrice] = useState("");
  const [apartments, setApartments] = useState([]);

  const fetchFilteredApartments = async (endpoint, params = "") => {
    try {
      const response = await fetch(
        `http://localhost:5000/filter/${endpoint}?${params}`
      );
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
  };

  useEffect(() => {
    if (location) fetchFilteredApartments("location", `location=${location}`);
    if (area) fetchFilteredApartments("filterarea", `area=${area}`);
    if (rooms) fetchFilteredApartments("sortascountroom");
    if (price) fetchFilteredApartments("sortasprice");
  }, [location, area, rooms, price]);
  return (
    <div>
      <div className="bg-inherit rounded-lg mt-4 flex flex-wrap gap-2 justify-center md:items-center">
        <div
          className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer"
          data-tip="City"
        >
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option disabled selected>
              <div className="flex items-center">
                <FaMapMarker className="size-96" />
                <span className="ml-2">Select City</span>
              </div>
            </option>
            <option value="Damascus">Damascus</option>
            <option value="Homs">Homs</option>
            <option value="Aleppo">Aleppo</option>
            <option value="Latakia">Latakia</option>
            <option value="Daraa">Daraa</option>
            <option value="Hama">Hama</option>
            <option value="Sweida">Sweida</option>
            <option value="Tartous">Tartous</option>
            <option value="Deir ez-Zor">Deir ez-Zor</option>
            <option value="Raqqa">Raqqa</option>
          </select>
        </div>

        <div
          className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer"
          data-tip="Area"
        >
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="" disabled selected>
              <div className="flex items-center">
                <FaRuler size={24} color="#fff" />
                <span className="ml-2">Select Area</span>
              </div>
            </option>
            <option value="100">100</option>
            <option value="100-150">100-150</option>
            <option value="150-200">150-200</option>
            <option value="200">200</option>
          </select>
        </div>

        <div
          className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer"
          data-tip="Rooms"
        >
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            <option value={"1"} disabled selected>
              <FaBed size={24} color="#fff" />
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div
          className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer"
          data-tip="Floor"
        >
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          >
            <option value={"floor hight"} disabled selected>
              <FaBuilding size={24} color="#fff" />
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>

        <div
          className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer"
          data-tip="Price"
        >
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={"$"}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="" disabled selected>
              <FaDollarSign size={24} color="#fff" />
            </option>
            <option value="500000">500000</option>
            <option value="500000-1000000">500000-1000000</option>
            <option value="1000000">1000000</option>
            <option value="more than 1000000">more than 1000000</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
