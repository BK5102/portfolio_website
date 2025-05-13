import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-8 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
      <p className="text-black">
        I'm passionate about building software applications in the tech industry. Whether it be building a web application or learning a new programming language, I am always open to applying my skills to produce an end result. In the future, I hope to build software tools that help individuals in the medical and healthcare field.
      </p>
    </motion.section>
  );
}
