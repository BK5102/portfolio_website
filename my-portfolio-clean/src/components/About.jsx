import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-300">
          This is a placeholder for your "About Me" section. You can talk about your background, skills, and experiences here. Feel free to add more paragraphs and details.
        </p>
        {/* Add more content here, like skills or a profile picture */}
      </div>
    </section>
  );
}

export default About;