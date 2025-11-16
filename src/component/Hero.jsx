import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Hi, I'm <span className="text-blue-300">Kaviyasri</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        I’m a Web Developer and Java Full-Stack Engineer. I build modern,
        intelligent, and user-friendly applications — focusing on clean design,
        accessible UI, and real-world impact.
      </motion.p>

      {/* BUTTONS */}
      <div className="flex gap-4 mb-8">
        <motion.a
          href="/resume.pdf"
          download="Kaviyasri_Resume.pdf"
          className="border border-blue-400 text-blue-300 px-6 py-3 rounded-full shadow-lg inline-flex items-center gap-3"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.03, backgroundColor: "rgba(59,130,246,0.15)" }}
        >
          📄 Download Resume
        </motion.a>

        <motion.a
          href="#contact"
          className="border border-blue-400 text-blue-300 px-6 py-3 rounded-full shadow-lg inline-flex items-center gap-3"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.03, backgroundColor: "rgba(59,130,246,0.15)" }}
        >
          Contact Me
        </motion.a>
      </div>

      {/* SOCIAL ICONS */}
      <motion.div
        className="flex gap-6 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <a
          href="https://github.com/KaviyasriBalaguru"
          target="_blank"
          className="text-gray-300 hover:text-blue-300 transition"
        >
          <Github size={30} />
        </a>

        <a
          href="https://www.linkedin.com/in/kaviyasri-balaguru"
          target="_blank"
          className="text-gray-300 hover:text-blue-300 transition"
        >
          <Linkedin size={30} />
        </a>

        <a
          href="mailto:srikaviya30@gmail.com"
          className="text-gray-300 hover:text-blue-300 transition"
        >
          <Mail size={30} />
        </a>
      </motion.div>
    </section>
  );
}
