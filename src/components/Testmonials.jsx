import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text:
      "DSRT delivered a stellar product — performance and design exceeded expectations.",
    author: "Alya Putri — CTO, Nova Labs",
  },
  {
    text:
      "Their 3D interaction is buttery smooth; mobile experience stayed flawless.",
    author: "Rizal H. — Product Lead, Orbital",
  },
  {
    text:
      "Fast, reliable, and beautiful. We saw metrics improve after launch.",
    author: "Dewi Santoso — Head of Growth, PixelWave",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What clients say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white/3 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <Quote className="text-cyan-300" />
                <p className="text-white/90 italic">"{q.text}"</p>
              </div>
              <p className="text-sm text-white/60 mt-3">{q.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
