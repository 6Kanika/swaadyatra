import Image from "next/image";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cl = (id: string) => `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_800/${id}`;

const collageImages = [
  { src: cl("amrit_kesar_1_gesei5"),   alt: "Kesar Lassi – famous street drink of Amritsar" },
  { src: cl("delhi_sitaram_1_gpvt99"),  alt: "Chole Bhature at SitaRam Diwan Chand, Delhi" },
  { src: cl("amrit_chungi_1_rxkj7x"),  alt: "Amritsari Kulcha at Chungi Kulcha Wala, Amritsar" },
  { src: cl("JAI_natraj_1_jiwlts"),    alt: "Dal Baati Churma at Natraj Restaurant, Jaipur" },
  { src: cl("amrit_gurdas_1_bb11ui"),  alt: "Traditional Punjabi food near Golden Temple, Amritsar" },
  { src: cl("jai_LMB_1_nux86g"),       alt: "Rajasthani thali at LMB Restaurant, Jaipur" },
];

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background collage */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
        {collageImages.map(({ src, alt }, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block bg-[#E23744] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Real Stories · Real Flavors
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
          Real Street Food Travel Stories{" "}
          <span className="text-[#E23744]">Across India</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
          Discover how travelers found authentic food experiences across India's
          most iconic cities.
        </p>
        <a
          href="#stories"
          className="inline-block bg-[#E23744] hover:bg-[#c72d38] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explore Stories
        </a>
      </div>
    </section>
  );
}
