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
        className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-blue-50 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">{p.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-3 leading-relaxed flex-1">{p.desc}</p>
            <p className="text-xs sm:text-sm text-gray-500 italic">Tech: {p.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
