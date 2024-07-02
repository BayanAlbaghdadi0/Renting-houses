import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaRuler } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div className="container pt-4 gap-10 mx-auto flex flex-col md:flex-row">
      <div className=" md:w-1/2 ">
        <h2 className="text-2xl font-bold mb-2 text-[#8be9fd]">Detail</h2>
        <div className="w-3/5 h-64 bg-gradient-to-r from-green-400 to-purple-600 rounded-2xl transition duration-300 hover:shadow-lg hover:shadow-[#8be9fd]/30">
          <div className=" h-64 bg-[#232530] rounded transition duration-200 hover:scale-98 hover:rounded-2xl p-3 w-full">
            <div className=" flex h-8 items-center w-full">
              <FaHome size={20} color="#fff" />
              <p className="text-white pl-1">type: Apartment</p>
            </div>
            <div className="h-8 flex items-center  w-full">
              <FaMapMarker size={20} color="#fff" />
              <p className="text-white pl-1">Location: Damascus/Maza</p>
            </div>
            <div className="h-8 items-center w-full flex">
              <FaRuler size={20} color="#fff" />
              <p className="text-white pl-1">Area: 200 m^2</p>
            </div>
            <div className="h-8 flex items-center w-full">
              <FaBuilding size={20} color="#fff" />
              <p className="text-white pl-1">Floor: 2th</p>
            </div>
            <div className="h-8 flex items-center w-full">
              <FaCompass size={20} color="#fff" />
              <p className="text-white pl-1">Direction: East</p>
            </div>
            <div className="h-8 flex items-center w-full">
              <FaBed size={20} color="#fff" />
              <p className="text-white pl-1">rooms: 3</p>
            </div>
            <div className="h-8 items-center w-full flex">
              <FaDollarSign size={20} color="#fff" />
              <p className="text-white">price: 900 000</p>
            </div>
          </div>
        </div>
        <div className="pt-4  w-2/3 leading-8">
          <h3 className="font-bold text-[#8be9fd]">Discreption</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            non illum numquam nostrum dolorem deleniti. Sunt enim alias impedit
            iste, totam deleniti vitae, doloremque obcaecati maiores sapiente
            minus facilis neque.
          </p>
        </div>
        <div className="pt-4">
          <h3 className="mb-2 text-[#8be9fd]">contact us</h3>
          <div className="flex pb-2">
            <FaPhone size={18} color="#fff" />
            <p className="text-gray-400 pl-2">+963 00000</p>
          </div>
          <div className="flex">
            <FaEnvelope size={18} color="#fff" />
            <p className="text-gray-400 pl-2">hello@gmail.com</p>
          </div>
        </div>
        <Link to="/">
          <button className="btn btn-outline btn-info w-36 mt-6">Back</button>
        </Link>
      </div>
      <div className="carousel w-[800px] ml-400 pt-8 pb-40">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
