import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

function StickyCTA() {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center justify-center gap-2 bg-[#00ff88] text-gray-900 font-bold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:shadow-[0_0_40px_rgba(0,255,136,0.8)] transition-all duration-300 pointer-events-auto"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="hidden md:inline">Start Project 🚀</span>
      <span className="md:hidden">Hire Me 🚀</span>
      <FiMessageSquare className="hidden sm:block text-lg" />
    </motion.a>
  );
}

export default StickyCTA;
