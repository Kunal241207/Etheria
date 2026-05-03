import cover from "../assets/homepagecover.jpeg";

const hotels = [
  {
    name: "Aurelia Cove",
    location: "Maldives",
    price: "$360",
    rating: "4.9",
    reviews: "312 reviews",
    room: "Ocean Villa",
    guests: "2 guests",
    size: "820 sq.ft",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=700&q=70",
    highlight: "A private lagoon-facing villa with soft interiors, a sunrise deck, and slow breakfast service.",
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
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=70",
    highlight: "A warm alpine suite with peak views, fireplace evenings, and quiet trail access.",
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
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=700&q=70",
    highlight: "A vineyard-side stay made for golden evenings, rustic dining, and peaceful mornings.",
    amenities: ["Vineyard", "Dining", "Garden"],
  },
];

export default function Featured() {
  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-24 overflow-hidden">

      <img
        src={cover}
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-105"
      />
      <div className="absolute inset-0 bg-[#f3eee7]/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f5efe7]/90 to-[#eadfce]/95" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="mb-10 max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-amber-700/80 uppercase font-semibold mb-3">
            Curated Hotels
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
            Choose the stay that feels right first.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {hotels.map((h) => (
            <article
              key={h.name}
              className="group rounded-2xl overflow-hidden bg-white/60 border border-white/70 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute top-4 left-4 text-xs text-white bg-white/25 px-3 py-1 rounded-full backdrop-blur">
                  {h.room}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                  <div>
                    <h3 className="font-['Cinzel'] text-xl">{h.name}</h3>
                    <p className="text-xs text-white/70">{h.location}</p>
                  </div>

                  <div className="bg-white/20 px-3 py-2 rounded-xl backdrop-blur text-right">
                    <p className="text-lg font-semibold">{h.price}</p>
                    <p className="text-[10px] text-white/70">per night</p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-3 text-xs">
                  <span className="text-amber-700 font-semibold">★ {h.rating}</span>
                  <span className="text-zinc-500">{h.reviews}</span>
                </div>

                <p className="text-sm text-zinc-700 leading-6 line-clamp-3">
                  {h.highlight}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {h.amenities.map((a) => (
                    <span key={a} className="text-xs px-3 py-1 bg-white/70 rounded-full text-zinc-700">
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex justify-between items-center border-t pt-4 text-xs">
                  <span className="text-zinc-500">Free cancellation</span>
                  <button className="bg-zinc-950 text-white px-4 py-2 rounded-full transition hover:bg-amber-700 hover:-translate-y-0.5">
                    View Details →
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#f5efe6]" />
    </section>
  );
}