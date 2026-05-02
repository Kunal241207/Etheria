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

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        <div className="relative z-10 h-full px-6 md:px-12 lg:px-24 flex items-center">
          
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

            <div className="max-w-2xl">
              
              <p className="text-white/80 text-sm mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                Unforgettable stays await on
              </p>

              <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                Discover Luxury Stays
              </h1>

              <p className="text-white/85 mt-6 text-sm md:text-base leading-relaxed max-w-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                Book premium hotels and experience comfort like never before with Etheria.
              </p>

            </div>

            <div className="flex items-center gap-4">

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