import ThreeScene from "./ThreeScene";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="z-10 text-center text-white max-w-2xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          The Future of 3D Web Experience
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Interactive • Elegant • Powered by <span className="text-cyan-400">XRVC.js</span>
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/30"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
