import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-dark-background py-20 md:py-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">A passionate [Your Profession] building amazing things.</p>
        <button className="bg-primary-blue text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
          See My Work
        </button>
      </div>
    </section>
  );
}

export default Hero;