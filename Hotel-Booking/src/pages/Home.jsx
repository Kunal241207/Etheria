import Navbar from "./Navbar";
import cover from "../assets/homepagecover.jpeg";

const featuredHotels = [
  {
    name: "Aurelia Cove",
    location: "Maldives",
    price: "$360",
    rating: "4.9",
    reviews: "312 reviews",
    room: "Ocean Villa",
    guests: "2 guests",
    size: "820 sq.ft",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=700&q=70",
    highlight:
      "A private lagoon-facing villa with soft interiors, a sunrise deck, and slow breakfast service.",
    amenities: ["Private Pool", "Spa Access", "Sea View"],
  },
  {
    name: "Noir Ridge",
    location: "Switzerland",
    price: "$310",
    rating: "4.8",
    reviews: "246 reviews",
    room: "Mountain Suite",
    guests: "3 guests",
    size: "690 sq.ft",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=70",
    highlight:
      "A warm alpine suite with peak views, fireplace evenings, and quiet trail access.",
    amenities: ["Fireplace", "Peak View", "Breakfast"],
  },
  {
    name: "Casa Solene",
    location: "Tuscany",
    price: "$240",
    rating: "4.7",
    reviews: "198 reviews",
    room: "Countryside Stay",
    guests: "2 guests",
    size: "540 sq.ft",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=700&q=70",
    highlight:
      "A vineyard-side stay made for golden evenings, rustic dining, and peaceful mornings.",
    amenities: ["Vineyard", "Dining", "Garden"],
  },
];

export default function Home() {
  return (
    <div className="relative bg-black">
      <Navbar />

      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={cover}
          alt="hotel"
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
        />
        
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-20 md:px-12 lg:px-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
            <p className="mb-5 text-sm font-medium text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-base">
              Unforgettable stays await on Etheria
            </p>

            <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.95] text-white drop-shadow-[0_5px_24px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl lg:text-8xl">
              Discover Luxury Stays
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] md:text-base">
              Book premium hotels and experience comfort like never before with
              Etheria.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4">
              <button className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-white">
                <span className="absolute inset-0 rounded-full border border-white/30 bg-white/25 backdrop-blur-md" />
                <span className="absolute inset-0 rounded-full bg-white/40 opacity-0 transition duration-300 group-hover:opacity-100" />
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

      <section className="relative min-h-screen overflow-hidden px-6 py-24 text-zinc-950 md:px-12 lg:px-24">
        <img
          src={cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-[#f3eee7]/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f5efe7]/88 to-[#eadfce]/92" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col justify-center">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-amber-700/80">
                Curated Hotels
              </p>
              <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Choose the stay that feels right first.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredHotels.map((hotel) => (
              <article
                key={hotel.name}
                className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 shadow-2xl shadow-amber-950/10 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/70"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/45 bg-white/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    {hotel.room}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-['Cinzel'] text-2xl font-bold text-white">
                        {hotel.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">
                        {hotel.location}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/25 px-4 py-3 text-right backdrop-blur-md">
                      <p className="text-2xl font-extrabold text-white">
                        {hotel.price}
                      </p>
                      <p className="text-xs text-white/60">per night</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-amber-700">
                        ★ {hotel.rating}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {hotel.reviews}
                      </p>
                    </div>

                    <div className="flex gap-2 text-xs text-zinc-700">
                      <span className="rounded-full bg-amber-950/5 px-3 py-1.5">
                        {hotel.guests}
                      </span>
                      <span className="rounded-full bg-amber-950/5 px-3 py-1.5">
                        {hotel.size}
                      </span>
                    </div>
                  </div>

                  <p className="min-h-20 text-sm leading-6 text-zinc-700">
                    {hotel.highlight}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-full border border-amber-950/10 bg-white/55 px-3 py-1.5 text-xs font-medium text-zinc-700"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-amber-950/10 pt-5">
                    <p className="text-xs leading-5 text-zinc-500">
                      Free cancellation before check-in.
                    </p>
                    <button
                      type="button"
                      className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-amber-700"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
