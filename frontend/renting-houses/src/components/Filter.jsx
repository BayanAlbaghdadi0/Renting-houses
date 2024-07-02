import React, { useState, useEffect } from 'react';
import { FaMapMarker, FaBuilding, FaRuler, FaBed, FaDollarSign } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { FaMapMarker, FaBuilding, FaRuler, FaBed, FaDollarSign } from 'react-icons/fa';

const Filter = () => {
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');
  const [rooms, setRooms] = useState('');
  const [floor, setFloor] = useState('');
  const [price, setPrice] = useState('');
  const [apartments, setApartments] = useState([]);

  const fetchFilteredApartments = async (endpoint, params = '') => {
    try {
      const response = await fetch(`http://localhost:5000/filter/${endpoint}?${params}`);
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  useEffect(() => {
    if (location) fetchFilteredApartments('location', `location=${location}`);
    if (area) fetchFilteredApartments('filterarea', `area=${area}`);
    if (rooms) fetchFilteredApartments('sortascountroom');
    if (price) fetchFilteredApartments('sortasprice');
  }, [location, area, rooms, price]);

  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');
  const [rooms, setRooms] = useState('');
  const [floor, setFloor] = useState('');
  const [price, setPrice] = useState('');
  const [apartments, setApartments] = useState([]);

  const fetchFilteredApartments = async (endpoint, params = '') => {
    try {
      const response = await fetch(`http://localhost:5000/filter/${endpoint}?${params}`);
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  useEffect(() => {
    if (location) fetchFilteredApartments('location', `location=${location}`);
    if (area) fetchFilteredApartments('filterarea', `area=${area}`);
    if (rooms) fetchFilteredApartments('sortascountroom');
    if (price) fetchFilteredApartments('sortasprice');
  }, [location, area, rooms, price]);

  return (
    <div>
      <div className="bg-inherit rounded-lg mt-4 flex flex-wrap gap-2 justify-center md:items-center">
        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="City">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option disabled selected>
              <FaMapMarker className='size-96' />
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

        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Area">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option disabled selected>
              <FaRuler size={24} color="#fff" />
            </option>
            <option>100</option>
            <option>100-150</option>
            <option>150-200</option>
            <option>200</option>
          </select>
        </div>

        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Rooms">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            <option disabled selected>
              <FaBed size={24} color="#fff" />
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Floor">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          >
            <option disabled selected>
              <FaBuilding size={24} color="#fff" />
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>

        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Price">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option disabled selected>
              <FaDollarSign size={24} color="#fff" />
            </option>
            <option>500000</option>
            <option>500000-1000000</option>
            <option>1000000</option>
            <option>more than 1000000</option>
          </select>
        </div>
    <div>
      <div className="bg-inherit rounded-lg mt-4 flex flex-wrap gap-2 justify-center md:items-center">
        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="City">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option disabled selected>
              <FaMapMarker className='size-96' />
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

        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Area">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option disabled selected>
              <FaRuler size={24} color="#fff" />
            </option>
            <option>100</option>
            <option>100-150</option>
            <option>150-200</option>
            <option>200</option>
          </select>
        </div>

        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Rooms">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            <option disabled selected>
              <FaBed size={24} color="#fff" />
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Floor">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          >
            <option disabled selected>
              <FaBuilding size={24} color="#fff" />
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>

        <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Price">
          <select
            className="select select-secondary border-[#232530] bg-[#232530] w-32"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option disabled selected>
              <FaDollarSign size={24} color="#fff" />
            </option>
            <option>500000</option>
            <option>500000-1000000</option>
            <option>1000000</option>
            <option>more than 1000000</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        {apartments.map(apartment => (
          <div key={apartment.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-bold">{apartment.name}</h2>
            <p>Location: {apartment.location}</p>
            <p>Area: {apartment.area}</p>
            <p>Rooms: {apartment.rooms}</p>
            <p>Floor: {apartment.floor}</p>
            <p>Price: {apartment.price}</p>
          </div>
        ))}

      <div className="mt-4">
        {apartments.map(apartment => (
          <div key={apartment.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-bold">{apartment.name}</h2>
            <p>Location: {apartment.location}</p>
            <p>Area: {apartment.area}</p>
            <p>Rooms: {apartment.rooms}</p>
            <p>Floor: {apartment.floor}</p>
            <p>Price: {apartment.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

