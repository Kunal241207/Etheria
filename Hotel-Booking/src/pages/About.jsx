import cover from "../assets/homepagecover.jpeg";

const stats = [
  { value: "120+", label: "Luxury stays" },
  { value: "18", label: "Curated cities" },
  { value: "24/7", label: "Guest support" },
];

const values = [
  "Handpicked hotels with warm, thoughtful service",
  "Comfort-first rooms designed for calm stays",
  "Simple booking with clear prices and trusted details",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#eadcc7] px-6 py-24 text-zinc-950 md:px-12 lg:px-24"
    >
      <img
        src={cover}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-16 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3eadc]/95 via-[#eadcc7]/90 to-[#caa46a]/55" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#efe1cc] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#d8bd91]/80 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 text-sm font-semibold text-amber-700">
            About Etheria
          </p>

          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Crafted for stays that feel effortless, elegant, and personal.
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-700 md:text-base">
            Etheria brings premium hotels, calming spaces, and reliable service
            into one smooth booking experience. We focus on places that feel
            refined without feeling distant, so every journey begins with
            confidence and ends with comfort.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-zinc-950/15 pt-4"
              >
                <p className="text-3xl font-extrabold text-amber-700">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[8px] border border-white/15 bg-zinc-950/90 p-6 shadow-[0_24px_80px_rgba(39,39,42,0.28)] backdrop-blur-xl">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white/60">Our promise</p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Stay beautifully
              </h3>
            </div>
            <span className="h-12 w-12 rounded-full border border-amber-200/40 bg-amber-100/20" />
          </div>

          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={value}
                className="flex gap-4 rounded-[8px] border border-white/10 bg-white/10 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-zinc-950">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-white/75">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
