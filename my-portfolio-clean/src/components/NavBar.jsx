import React from 'react';

function Navbar() {
  return (
    <nav className="bg-dark-background fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary-blue">Your Name</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-primary-blue transition duration-300">About</a>
          <a href="#projects" className="hover:text-primary-blue transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-primary-blue transition duration-300">Contact</a>
        </div>
        {/* Mobile Menu (you'll likely want to expand on this) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* You can use an icon here for a hamburger menu */}
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;