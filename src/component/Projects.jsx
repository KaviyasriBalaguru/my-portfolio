import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Personnel Coach",
    desc: "Developed an AI-powered career coaching web app using SAP CAP (CDS), Node.js, and UI5 Fiori for personalized learning plans and recommendations. Integrated SQLite and AI services to deliver tailored insights and enhance user engagement.",
    tech: "SAP CAP, UI5, Node.js, SQLite, AI API",
  },
  {
    title: "CEO Dashboard",
    desc: "Designed an intuitive CEO Dashboard in Figma to streamline decision-making and data access. Focused on clarity, visualization, and seamless navigation for efficient performance tracking.",
    tech: "UI/UX Design Tools: Figma",
  },
  {
    title: "IoT-Based Food Quality Monitor",
    desc: "Developed an IoT-based food quality monitor using MQ gas and temperature sensors for spoilage detection with real-time alerts. Enabled local and remote monitoring to enhance food safety and reduce waste.",
    tech: "Arduino UNO, IoT, MQ-Sensors",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-sm sm:text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A snapshot of the work I am most proud of — spanning AI-powered solutions,
        thoughtful product design, and embedded innovations. Each build keeps the
        experience consistent across desktop and mobile.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 items-stretch">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="group relative flex flex-col h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/90 to-blue-50/80 p-6 shadow-xl shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-blue-500/15 via-transparent to-transparent" />
            <div className="relative">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold px-3 py-1 mb-4">
                Featured Work
              </span>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">{p.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">{p.desc}</p>
            </div>
            <p className="relative mt-4 text-xs sm:text-sm text-gray-500 italic">Tech: {p.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
