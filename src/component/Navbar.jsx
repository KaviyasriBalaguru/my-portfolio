import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleScroll = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // update active on scroll (for highlight)
  useEffect(() => {
    const sections = ["home", "about", "resume", "projects", "contact"];
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[#010417]/60 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center text-white">
      <h1
        className="text-2xl font-bold cursor-pointer text-blue-400"
        onClick={() => handleScroll("home")}
      >
       Kaviyasri
      </h1>

      <div className="space-x-3 sm:space-x-6">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "resume", label: "Resume" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className={`px-1 ${
              active === link.id
                ? "text-blue-400 font-semibold"
                : "text-gray-200 hover:text-blue-300"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
