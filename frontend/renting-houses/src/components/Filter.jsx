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
    <div className="bg-inherit rounded-lg mt-4 flex gap-2">
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center w-1/4" data-tip="City">
        <button ><FaMapMarker size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center w-1/4" data-tip="Type">
        <button ><FaHome size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center w-1/4" data-tip="Area">
        <button ><FaRuler size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center w-1/4" data-tip="Rooms">
        <button ><FaBed size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center w-1/4" data-tip="Floor">
        <button ><FaBuilding size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center w-1/4" data-tip="Direction">
        <button ><FaCompass size={24} color="#fff" /></button>
      </div>
      <div className="lg:tooltip bg-[#232530] rounded-lg p-4 flex flex-col items-center justify-center w-1/4" data-tip="Price">
        <button ><FaDollarSign size={24} color="#fff" /></button>
      </div>
    </div>
  );
};

export default Filter;