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
      <h1 className="text-lg font-semibold tracking-wide text-zinc-900">
        ETHERIA
      </h1>

      <div className="hidden md:flex items-center bg-white/10 border border-white/10 rounded-full px-1 py-1 gap-2 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="group relative px-4 py-1.5 text-sm text-zinc-700 rounded-full transition-all duration-300 hover:text-zinc-900 hover:-translate-y-[1px]"
          >
            <span>{item}</span>

            <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] w-0 bg-zinc-900 transition-all duration-300 group-hover:w-3/4" />

            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-white/20 -z-10" />
          </a>
        ))}
      </div>

      <button className="hidden md:flex relative overflow-hidden items-center gap-2.5 px-5 py-2 rounded-full text-sm font-medium text-zinc-900 bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 group">
        
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
          className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${
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
              className="px-4 py-2.5 rounded-lg text-sm text-zinc-700 hover:bg-white/20 transition"
            >
              {item}
            </a>
          ))}

          <button className="flex items-center justify-center gap-2.5 bg-white/20 backdrop-blur-md border border-white/20 text-zinc-900 text-sm font-medium px-5 py-2.5 rounded-full mt-3 w-fit">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}