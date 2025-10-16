import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-cyan-400">Quantum</span>Glow
        </h1>
        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          <li className="hover:text-cyan-400 transition">About</li>
          <li className="hover:text-cyan-400 transition">Features</li>
          <li className="hover:text-cyan-400 transition">Projects</li>
          <li className="hover:text-cyan-400 transition">Contact</li>
        </ul>
        <Menu className="text-white md:hidden" />
      </div>
    </motion.nav>
  );
}
