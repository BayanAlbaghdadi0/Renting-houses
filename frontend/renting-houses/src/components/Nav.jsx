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
          <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/">
            HOME
          </Link>
          <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/about">
            ABOUT US
          </Link>
          <Link className="hover:text-blue-500 text-white font-bold hover:underline hover:underline-offset-4" to="/contact">
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center gap-2 ">
          <Link className="hover:text-blue-500 text-white font-extrabold" to="/login">
          <button className="btn btn-outline btn-sm">login</button>
          </Link>
          <Link to="/signup">
          <button className="btn btn-outline btn-info btn-sm">Signup</button>
          </Link>
          <Link to="/dashboard">
          <button className="btn btn-outline btn-secondary btn-sm">Dashboard</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;