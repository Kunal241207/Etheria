import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const links = {
    Company: ["About", "Careers", "Blog", "Partners"],
    Support: ["Help Center", "Contact Us", "Accessibility", "Safety Information"],
    More: ["Airlines", "Fees", "Tips", "Security"],
  };

  const socials = [FaInstagram, FaTwitter, FaLinkedin, FaFacebook];

  return (
    <footer className="bg-[#0f1115] text-white px-8 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto flex justify-between items-start">

        <div className="max-w-sm space-y-5">
          <h2 className="text-sm tracking-[0.35em] font-['Cinzel'] text-white/90">
            ETHERIA
          </h2>

          <p className="text-sm text-white/50 leading-6">
            Premium stays and seamless booking for modern travelers.
          </p>

          <div className="flex gap-6 pt-2">
            {socials.map((Icon, i) => (
              <Icon
                key={i}
                className="text-xl text-white/60 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-110"
              />
            ))}
          </div>
        </div>

        <div className="flex gap-30 mr-10">
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-[11px] tracking-widest text-white/40 mb-5 uppercase">
                {title}
              </p>

              <div className="space-y-3">
                {items.map((item) => (
                  <a
                    key={item}
                    className="block text-sm leading-6 text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 border-t border-white/10 pt-6 flex justify-between text-sm text-white/40">
        <p>© 2026 Etheria. All rights reserved.</p>

        <div className="flex gap-6">
          {["Privacy", "Terms", "Sitemap"].map((t) => (
            <a key={t} className="hover:text-white transition">
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}