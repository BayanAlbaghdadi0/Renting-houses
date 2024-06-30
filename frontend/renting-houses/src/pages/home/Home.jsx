import React from "react";
import Header from "../../components/Nav";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import SliderCards from "../../components/SliderCards";

function Home() {
  return (
    <div>
      <Header />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="max-w-xl rounded-lg shadow-2xl"
            src="./image/hero.png"
            alt="photo"
          />

          <div>
            <h1 className="text-5xl font-bold">find your perfect rental </h1>
            <p className="py-6 text-xl">
              we can help you easily find a home or apartment for rent that
              you'll love.
              <br /> We take pride in offering top-quality home rental services.
              <br /> We strive to provide an exceptional experience for our
              clients by offering a wide range of options and around-the-clock
              support.
            </p>
            <Link to="/signup">
              <button className="btn btn-outline btn-info w-35 mt-3">
                Get Start
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Filter />
      <SliderCards />

      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">
          About Sahand Estate
        </h1>
        <p className="mb-4 text-slate-700">
          Sahand Estate is a leading real estate agency that specializes in
          helping clients buy, sell, and rent properties in the most desirable
          neighborhoods. Our team of experienced agents is dedicated to
          providing exceptional service and making the buying and selling
          process as smooth as possible.
        </p>
        <p className="mb-4 text-slate-700">
          Our mission is to help our clients achieve their real estate goals by
          providing expert advice, personalized service, and a deep
          understanding of the local market. Whether you are looking to buy,
          sell, or rent a property, we are here to help you every step of the
          way.
        </p>
        <p className="mb-4 text-slate-700">
          Our team of agents has a wealth of experience and knowledge in the
          real estate industry, and we are committed to providing the highest
          level of service to our clients. We believe that buying or selling a
          property should be an exciting and rewarding experience, and we are
          dedicated to making that a reality for each and every one of our
          clients.
        </p>
      </div>

      <Filter />
      <SliderCards />

      <Footer />
    </div>
  );
}

export default Home;
