import React from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaRuler } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaCompass } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';

const Filter = () => {
  return (
    <div className="bg-inherit rounded-lg mt-4 flex flex-wrap gap-2 justify-center md:items-centermd:items-center">
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="City">
        <button ><FaMapMarker size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Type">
        <button ><FaHome size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Area">
        <button ><FaRuler size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Rooms">
        <button ><FaBed size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Floor">
        <button ><FaBuilding size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Direction">
        <button ><FaCompass size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center md:w-1/2 lg:w-[13.7%] cursor-pointer" data-tip="Price">
        <button ><FaDollarSign size={24} color="#fff" /></button>
      </div>
    </div>
  );
};

export default Filter;