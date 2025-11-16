import { motion } from "framer-motion";
import profile from "/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-transparent px-4 sm:px-8 py-12 sm:py-16 md:py-20"
    >
      {/* Profile Image Animation */}
      <motion.img
        src={profile}
        alt="Kaviyasri"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full shadow-lg mb-6 md:mb-0 md:mr-10 object-cover"
        initial={{ opacity: 0, x: -60, scale: 0.85 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      />

      {/* Text Section Animation */}
      <motion.div
        className="text-center md:text-left max-w-2xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 text-sm sm:text-base text-justify leading-relaxed tracking-wide">
          I'm <span className="font-semibold text-blue-400">Kaviyasri</span>, a results-driven Electronics and Communication Engineering
           graduate with hands-on experience in web development, RAG, and AI integration. I have completed multiple internships in software
            and automation domains, where I gained expertise in full-stack development, SAP CAPM & UI5, and embedded system design.
            Known for my creativity, problem-solving skills, and adaptability, I’m passionate about building innovative and user-friendly
             solutions that connect technology with real-world impact.
        </p>
      </motion.div>
    </section>
  );
}
