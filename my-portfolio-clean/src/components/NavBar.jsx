import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-xl font-bold">MyPortfolio</div>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </motion.nav>
  );
}
