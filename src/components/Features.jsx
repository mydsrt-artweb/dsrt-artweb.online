import { motion } from "framer-motion";
import { Code2, Cpu, Box } from "lucide-react";

export default function Features() {
  const list = [
    { icon: <Code2 className="text-cyan-400" size={32} />, title: "Modular Code", desc: "Clean and scalable architecture ready for production." },
    { icon: <Cpu className="text-purple-400" size={32} />, title: "GPU Optimized", desc: "Harness the power of GPU rendering and shaders." },
    { icon: <Box className="text-pink-400" size={32} />, title: "3D Components", desc: "Reusable, dynamic, and extensible for all scenes." },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-950 text-white">
      <h2 className="text-center text-4xl font-bold mb-16">Key <span className="text-cyan-400">Features</span></h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {list.map((f, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05, rotateY: 5 }} className="p-8 rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-xl shadow-lg">
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
