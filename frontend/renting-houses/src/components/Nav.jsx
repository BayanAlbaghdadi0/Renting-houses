// Header.js
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://placehold.co/200x200"
            alt="Logo"
            className="h-10 w-10 mr-4"
          />
          <h1 className="font-bold text-lg text-white">
            Your Company
          </h1>
        </div>
        <nav className="space-x-6 text-white">
          <Link className="hover:text-blue-500" to="/">
            HOME
          </Link>
          <Link className="hover:text-blue-500" to="/about">
            ABOUT US
          </Link>
          <Link className="hover:text-blue-500" to="/contact">
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center">
          <Link className="hover:text-blue-500 text-white" to="/login">
            Log in
          </Link>
          <Link to="/signup">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-5"
              type="button"
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;