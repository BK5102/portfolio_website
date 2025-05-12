import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function Header() {
  return (
    <header className="bg-dark-background py-4 md:py-6 fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary-blue">
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/about" className="hover:text-primary-blue transition duration-300">
            About
          </Link>
          <Link to="/projects" className="hover:text-primary-blue transition duration-300">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-primary-blue transition duration-300">
            Contact
          </Link>
          {/* Add more navigation links as needed */}
        </nav>
        {/* Mobile Menu (you'll likely want to expand on this) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* You can use an icon here for a hamburger menu */}
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;