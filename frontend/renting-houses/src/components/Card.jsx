import React from 'react';
import { FaBed } from 'react-icons/fa';
import { FaRuler } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';

const cardsData = [
  {
    id: 1,
    image: "./image/hero.png",
    title: "Apartment",
    price: "1 Million",
    location: "Damascus - Albaramkeh",
    beds: 2,
    area: 200,
  },
  {
    id: 2,
    image: "./image/hero.png",
    title: "House",
    price: "2 Million",
    location: "Damascus - Mezze",
    beds: 3,
    area: 300,
  },
  {
    id: 3,
    image: "./image/hero.png",
    title: "House",
    price: "2 Million",
    location: "Damascus - Mezze",
    beds: 3,
    area: 300,
  },
  {
    id: 4,
    image: "./image/hero.png",
    title: "House",
    price: "2 Million",
    location: "Damascus - Mezze",
    beds: 3,
    area: 300,
  },
  {
    id: 5,
    image: "./image/hero.png",
    title: "House",
    price: "2 Million",
    location: "Damascus - Mezze",
    beds: 3,
    area: 300,
  },
  {
    id: 6,
    image: "./image/hero.png",
    title: "House",
    price: "2 Million",
    location: "Damascus - Mezze",
    beds: 3,
    area: 300,
  }
];

const Card = ({ card }) => {
  return (
    <div className="bg-[#232530] rounded-lg shadow-lg p-3 w-64">
      <img
        src={card.image}
        alt="Apartment Image"
        className="rounded-lg w-full h-40 object-cover mb-4"
      />
      <div className="text-white font-semibold">
        <h2 className="text-lg mb-2 flex gap-2">
          <FaHome size={20} color="#fff" />
          {card.title}
        </h2>
        <p className="text-sm mb-2 flex gap-2">
          <FaDollarSign size={20} color="#fff" />
          {card.price}
        </p>
        <p className="text-sm mb-4 flex gap-2">
          <FaMapMarker size={20} color="#fff" />
          {card.location}
        </p>
        <div className="flex">
          <div className="text-white px-2 rounded flex gap-2">
            <FaBed size={20} color="#fff" />
            {card.beds}
          </div>
          <div className="text-white font-bold px-4 rounded flex gap-2">
            <FaRuler size={20} color="#fff" />
            {card.area}
          </div>
          <button className="btn btn-outline btn-info py-0 px-5 mx-2 h-0 min-h-6">
            detail
          </button>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="flex overflow-x-auto">
    <div className="flex flex-nowrap gap-4">
      {cardsData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
    </div>
  );
};

export default CardList;