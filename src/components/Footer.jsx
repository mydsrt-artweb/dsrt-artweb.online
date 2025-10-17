import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/6 py-10 text-center text-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-cyan-400"><Github /></a>
          <a href="#" className="hover:text-cyan-400"><Twitter /></a>
          <a href="mailto:contact@dsrt-artweb.online" className="hover:text-cyan-400"><Mail /></a>
        </div>

        <p className="text-sm mb-2">© {new Date().getFullYear()} DSRT ArtWeb — All rights reserved.</p>
        <p className="text-xs text-white/40">Built with ♥ using React, Tailwind, Three.js & Vercel.</p>
      </div>
    </footer>
  );
}
