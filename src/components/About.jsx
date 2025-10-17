import { motion } from "framer-motion";
import { Cpu, Sparkles, Layers } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Cpu size={32} className="text-cyan-400" />, title: "Next-Gen Engine", text: "Built with modular XRVC.js foundation." },
    { icon: <Sparkles size={32} className="text-purple-400" />, title: "Real-Time Motion", text: "Fluid 3D visuals powered by Three.js." },
    { icon: <Layers size={32} className="text-pink-400" />, title: "Ultra Responsive", text: "Optimized for all devices and displays." },
  ];

  return (
    <section className="py-32 bg-black text-center text-white">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-12">
        About <span className="text-cyan-400">QuantumGlow</span>
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg border border-white/10"
          >
            <div className="mb-4 flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
