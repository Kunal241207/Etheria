import React, { useState, useEffect } from "react";
const navItems = ["Home", "Services", "Pricing", "About"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between transition-all duration-300
      ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl border-b border-white/10 shadow-none"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <h1 className="group relative flex items-center gap-3">
        
        <span className="relative font-['Cinzel'] text-xl md:text-2xl font-extrabold tracking-[0.22em] leading-none">
          <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            ETHERIA
          </span>
          <span className="absolute -bottom-2 left-0 h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-200 via-white/80 to-transparent transition-all duration-300 group-hover:w-20" />
        </span>
      </h1>

      <div className="hidden md:flex items-center bg-white/10 border border-white/15 rounded-full px-1 py-1 gap-1 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="group relative px-4 py-1.5 text-sm font-medium text-white/80 rounded-full transition-all duration-300 hover:text-white hover:-translate-y-[1px]"
          >
            <span>{item}</span>

            <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-3/4" />

            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-white/15 -z-10" />
          </a>
        ))}
      </div>

      <button className="hidden md:flex relative overflow-hidden items-center gap-2.5 px-5 py-2 rounded-full text-sm font-semibold text-zinc-950 bg-white/85 backdrop-blur-md border border-white/30 transition-all duration-300 group">
        
        <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-300" />

        <span className="relative z-10">Get started</span>

        <span className="relative z-10 size-7 rounded-full bg-white flex items-center justify-center transform translate-x-1.5 transition-transform duration-300 ease-out group-hover:translate-x-3">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path
              d="M.6 4.602h10m-4-4 4 4-4 4"
              stroke="#3f3f47"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden flex flex-col gap-1.5 p-1"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/20 backdrop-blur-xl border-t border-white/10 flex flex-col p-5 gap-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/20 transition"
            >
              {item}
            </a>
          ))}

          <button className="flex items-center justify-center gap-2.5 bg-white/85 backdrop-blur-md border border-white/20 text-zinc-950 text-sm font-semibold px-5 py-2.5 rounded-full mt-3 w-fit">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}
