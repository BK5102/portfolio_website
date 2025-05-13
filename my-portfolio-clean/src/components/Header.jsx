import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="text-center py-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-extrabold">Welcome to My Portfolio</h1>
    </motion.header>
  );
}
