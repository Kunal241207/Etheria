import Navbar from "./Navbar";
import cover from "../assets/homepagecover.jpeg";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />

      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={cover}
          alt="hotel"
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
        />
        
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/35 to-transparent" />

        <div className="relative z-10 h-full px-6 md:px-12 lg:px-24 flex items-center justify-center pt-20">
          <div className="max-w-5xl text-center flex flex-col items-center">
            <p className="text-white/85 text-sm md:text-base font-medium mb-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
              Unforgettable stays await on Etheria
            </p>

            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] drop-shadow-[0_5px_24px_rgba(0,0,0,0.55)]">
              Discover Luxury Stays
            </h1>

            <p className="text-white/90 mt-7 text-sm md:text-base leading-7 max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              Book premium hotels and experience comfort like never before with
              Etheria.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4">
              <button className="group relative px-6 py-3 rounded-full text-sm font-medium text-white overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-white/25 backdrop-blur-md border border-white/30" />

                <span className="absolute inset-0 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                <span className="relative z-10 flex items-center gap-2">
                  Explore Hotels
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
