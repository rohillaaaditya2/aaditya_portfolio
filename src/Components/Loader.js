import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-[#00ff88] border-t-transparent rounded-full animate-spin shadow-[0_0_30px_rgba(0,255,136,0.2)]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div 
        className="mt-8 text-[#00ff88] font-bold tracking-[0.3em] text-sm md:text-base animate-pulse"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        INITIALIZING...
      </motion.div>
    </motion.div>
  );
}

export default Loader;
