import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    const SERVICE_ID = "service_a0rx3vc";
    const TEMPLATE_ID = "template_8r6mnkf";
    const PUBLIC_KEY = "mfsR9SQofnOfodGa6";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setSending(false);
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
        setSending(false);
      }
    );
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-400 mb-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        I’m open to new opportunities and collaborations. Fill the form or use
        the links to reach me directly — I typically reply within a few days.
      </motion.p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <motion.div
          className="text-gray-300 space-y-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-blue-300">Get in touch</h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-blue-300" />
              <span>+91 7806803776</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-blue-300" />
              <span>Chennai, India</span>
            </div>

            <a
              href="mailto:srikaviya30@gmail.com"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Mail size={20} className="text-blue-300" />
              <span>srikaviya30@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kaviyasri-balaguru"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Linkedin size={20} className="text-blue-300" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/KaviyasriBalaguru"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Github size={20} className="text-blue-300" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: FORM */}
        <motion.div
          className="bg-transparent"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

            {/* Row 1: Name + Email */}
            <div className="flex gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="flex-1 rounded-lg px-4 py-3 bg-white/5 border border-blue-400/60 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="flex-1 rounded-lg px-4 py-3 bg-white/5 border border-blue-400/60 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Subject */}
            <input
              name="title"
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg px-4 py-3 bg-white/5 border border-blue-400/60 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your message..."
              required
              className="w-full rounded-lg px-4 py-3 bg-white/5 border border-blue-400/60 placeholder-gray-400 h-40 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={sending}
                className="px-6 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white transition"
              >
                {sending ? "Sending..." : "Submit"}
              </button>
            </div>

            {success && (
              <motion.p
                className="text-green-400 text-center font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
              >
                ✅ Message sent — thank you! I’ll reply soon.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      <div className="w-full mt-16 border-t border-white/10"></div>

      <footer className="mt-8 text-gray-400 text-sm text-center">
        © 2025 Kaviyasri. All rights reserved.
      </footer>
    </section>
  );
}
