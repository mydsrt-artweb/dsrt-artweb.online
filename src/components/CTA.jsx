import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-900/10 to-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to craft something extraordinary?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 mb-8"
        >
          Let’s build an immersive web experience that elevates your product and delight users.
        </motion.p>

        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-semibold shadow-lg"
          >
            Contact Us
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            href="#showcase"
            className="px-6 py-3 rounded-full border border-white/10 text-white/90"
          >
            View Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
}
