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
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pt-20">
                  <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-[90%]" src="./image/hero.png" alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Filter />
      <SliderCards />

      <Footer />
    </div>
  );
}

export default Home;
