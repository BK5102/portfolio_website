import React from 'react';
import {motion} from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-800 to-purple-900 text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Bhavana</h1>
      <p className="text-lg max-w-xl">I'm a web developer who builds beautiful React apps.</p>
    </motion.section>
  );
}



/* function Hero() {
  return (
    <section id="hero" className="bg-dark-background py-20 md:py-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Hello, I'm Bhavana Kannan</h1>
        <p className="text-lg md:text-xl text-red-300 mb-8">A passionate Computer Science student at Arizona State University building amazing things.</p>
        
      </div>
    </section>
  );
}

export default Hero; */