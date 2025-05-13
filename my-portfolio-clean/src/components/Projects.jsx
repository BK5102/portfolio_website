import { motion } from 'framer-motion';

const projects = [
  { title: 'Portfolio Website', description: 'Built with React and Tailwind CSS' },
  { title: 'E-commerce App', description: 'Built using Firebase and React Router' },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-8 max-w-6xl mx-auto bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-black">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-300 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
            <p className="text-black">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
