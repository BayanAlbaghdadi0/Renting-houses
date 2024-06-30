import React from "react";
import { FaBed } from "react-icons/fa";
import { FaRuler } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../src/hooks/useAuth";

const data = [
  {
    image: "/image/hero.png",
    title: "Apartment 1",
    price: "$1000",
    location: "New York",
    beds: 2,
    area: "100",
  },
  {
    image: "/image/hero.png",
    title: "Apartment 2",
    price: "$1500",
    location: "Los Angeles",
    beds: 3,
    area: "150",
  },
  {
    image: "/image/hero.png",
    title: "Apartment 3",
    price: "$2000",
    location: "Chicago",
    beds: 4,
    area: "200",
  },
  {
    image: "/image/hero.png",
    title: "Apartment 1",
    price: "$1000",
    location: "New York",
    beds: 2,
    area: "100",
  },
  {
    image: "/image/hero.png",
    title: "Apartment 2",
    price: "$1500",
    location: "Los Angeles",
    beds: 3,
    area: "150",
  },
  {
    image: "/image/hero.png",
    title: "Apartment 3",
    price: "$2000",
    location: "Chicago",
    beds: 4,
    area: "200",
  },
];

function SliderCards() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleDetailClick = () => {
    if (user) {
      navigate("/detail");
    } else {
      navigate("/login"); // or "/signup" depending on your routing
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[95%] m-auto">
      <div>
        <div className="mt-4">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-[#232530] h-[350px] text-black rounded-xl p-3"
              >
                <div className=" flex justify-center items-center rounded-t-xl">
                  <img src={d.image} alt="" className=" rounded-xl h-44" />
                </div>

                <div className="text-white pt-3">
                  <h2 className="text-lg mb-2 flex gap-2">
                    <FaHome size={20} color="#fff" />
                    {d.title}
                  </h2>
                  <p className="text-sm mb-2 flex gap-2">
                    <FaDollarSign size={20} color="#fff" />
                    {d.price}
                  </p>
                  <p className="text-sm mb-4 flex gap-2">
                    <FaMapMarker size={20} color="#fff" />
                    {d.location}
                  </p>
                  <div className="flex justify-between">
                    <div className="text-white px-2 rounded flex gap-2">
                      <FaBed size={20} color="#fff" />
                      {d.beds}
                    </div>
                    <div className="text-white px-4 rounded flex gap-2">
                      <FaRuler size={20} color="#fff" />
                      {d.area}
                    </div>

                    <button
                      onClick={handleDetailClick}
                      className="btn btn-outline btn-info py-0 px-5 mx-2 h-0 min-h-6"
                    >
                      detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default SliderCards;
