import { motion } from "framer-motion";

const projects = [
  {
    img: "/images/showcase1.webp",
    title: "XR Portal",
    tag: "WebXR",
    color: "from-cyan-400 to-blue-500",
  },
  {
    img: "/images/showcase2.webp",
    title: "3D Commerce",
    tag: "E-Commerce",
    color: "from-pink-400 to-purple-500",
  },
  {
    img: "/images/showcase3.webp",
    title: "AR Interaction",
    tag: "AR",
    color: "from-yellow-400 to-orange-500",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Selected <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group block rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br bg-opacity-10"
            >
              <div className={`relative h-56 bg-gradient-to-br ${p.color} bg-opacity-10`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover object-center opacity-95 group-hover:scale-105 transform transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6 bg-black/60 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-white/6 text-white/80">
                    {p.tag}
                  </span>
                </div>
                <p className="text-sm text-white/70">
                  Interactive project demonstrating immersive WebGL experiences and smooth UI motion.
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
