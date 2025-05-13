import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-8 text-center bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch!</h2>
      <p className="mb-4 text-black">
        Interested in working together? Let's talk!
      </p>
      <a
        href="mailto:you@example.com"
        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
      >
        Email Me
      </a>
    </motion.section>
  );
}
