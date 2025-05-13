import { motion } from 'framer-motion';

const projects = [
  { title: 'Portfolio Website', description: 'Built with React and Tailwind CSS' },
  { title: 'E-commerce App', description: 'Built using Firebase and React Router' },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-8 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
