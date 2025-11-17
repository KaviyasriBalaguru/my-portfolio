import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
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
    <nav className="fixed top-0 w-full bg-[#010417]/70 backdrop-blur-lg z-50 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-white">
        <h1
          className="text-2xl font-bold cursor-pointer text-blue-400"
          onClick={() => handleScroll("home")}
        >
          Kaviyasri
        </h1>

        <button
          className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-current mb-1.5 transition-all" />
          <span className="block h-0.5 w-6 bg-current mb-1.5 transition-all" />
          <span className="block h-0.5 w-6 bg-current transition-all" />
        </button>

        <div className="hidden sm:flex sm:items-center sm:space-x-6">
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
              className={`text-sm tracking-wide transition ${
                active === link.id
                  ? "text-blue-400 font-semibold"
                  : "text-gray-200 hover:text-blue-300"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-[max-height] duration-300 ${
          menuOpen ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 pb-4 text-white">
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
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                active === link.id
                  ? "bg-blue-500/20 text-blue-300 font-semibold"
                  : "text-gray-200 hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
