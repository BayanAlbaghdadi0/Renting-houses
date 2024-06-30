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
<<<<<<< HEAD
      <div id="home" className="relative  overflow-hidden">
        <div className='mb-16'>
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-[#282a36] sm:pb-16 md:pb-20 lg:max-w-[32rem] lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-lg px-10 sm:text-center lg:text-left">
                  <h2 className="my-6 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                    find your perfect rental
                  </h2>
                  <p>
                    we can help you easily find a home or apartment for rent that you'll love.
                    <br /> We take pride in offering top-quality home rental services.
                    <br /> We strive to provide an exceptional experience for our clients by offering a wide range of options and around-the-clock support.
                  </p>
                  <Link to='/signup'>
                    <button className="btn btn-outline btn-info w-35 mt-3">
                      Get Start
                    </button>
                  </Link>
                </div>
              </main>
            </div>
=======
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
>>>>>>> cbddda08abbef4ea7bda4b2be9462f16a44d6613
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pt-20">
            <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-[90%]" src="./image/hero.png" alt="" />
          </div>

        </div>
      </div>


      <Filter />
      <SliderCards />
<<<<<<< HEAD
=======

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
>>>>>>> cbddda08abbef4ea7bda4b2be9462f16a44d6613
      <Footer />
    </div>
  );
}

export default Home;
