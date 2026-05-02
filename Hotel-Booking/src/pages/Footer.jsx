const footerColumns = [
  {
    title: "Explore",
    links: ["Hotels", "Moods", "Destinations", "Blog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    links: ["FAQ", "Cancellations", "Privacy", "Terms"],
  },
];

const socialLinks = ["Instagram", "Twitter", "Airbnb"];

export default function Footer() {
  return (
    <footer className="bg-[#17130f] px-6 py-16 text-[#8f8780] md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <h2 className="font-['Cinzel'] text-3xl font-extrabold tracking-[0.08em] text-[#f1eadf]">
              Etheria
            </h2>

            <p className="mt-8 max-w-sm text-sm font-medium leading-7 text-[#8f8780] md:text-base">
              A hotel booking platform built around atmosphere, not
              algorithms. Find your mood. Find your stay.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="border border-[#3a2f24] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#9d9187] transition duration-300 hover:border-[#b99a63] hover:text-[#e0c991]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#b99a63]">
                  {column.title}
                </h3>

                <ul className="mt-8 space-y-5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-base font-semibold text-[#8f8780] transition duration-300 hover:text-[#f1eadf]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-16 border-t border-[#3a2f24]" />

        <div className="flex flex-col gap-5 text-sm font-semibold text-[#8f8780] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Etheria. All rights reserved.</p>
          <p>Designed for those who feel before they go.</p>
        </div>
      </div>
    </footer>
  );
}
