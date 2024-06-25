import React from 'react'
import Header from '../../components/Nav'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Filter from '../../components/Filter'
import Card from '../../components/Card'
import CardList from '../../components/Card'


function Home() {
  return (
    <div>
      <Header />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="max-w-xl rounded-lg shadow-2xl" src='./image/hero.png' alt="photo" />

          <div>
            <h1 className="text-5xl font-bold">find your perfect rental </h1>
            <p className="py-6 text-xl">
              we can help you easily find a home or apartment for rent that you'll love.
              <br /> We take pride in offering top-quality home rental services.
              <br /> We strive to provide an exceptional experience for our clients by offering a wide range of options and around-the-clock support.
            </p>
            <Link to = '/signup'>
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <Filter />
      {/* <Card /> */}
      <CardList />
      <Footer />
    </div>
  )
}

export default Home

