import React from 'react';

function Navbar() {
  return (
    <nav className="bg-dark-background fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary-blue">Bhavana Kannan</div>
        
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