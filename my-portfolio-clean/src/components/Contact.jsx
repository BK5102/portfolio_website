import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a href="mailto:your.email@example.com" className="bg-primary-blue text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
          Email Me
        </a>
        {/* You can add a contact form here later */}
      </div>
    </section>
  );
}

export default Contact;