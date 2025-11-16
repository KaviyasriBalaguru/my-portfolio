import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        My Resume
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-8 text-center max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        Download my resume to explore my skills, intern experience, and
        detailed project summaries — perfect if you’re hiring or want to learn
        more about my work.
      </motion.p>

      <motion.a
        href="./resume.pdf"
        download="Kaviyasri_Resume.pdf"
        className="border border-blue-400 text-blue-300 px-6 py-3 rounded-full shadow-lg inline-flex items-center gap-3"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03, backgroundColor: "rgba(59,130,246,0.15)" }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
}
