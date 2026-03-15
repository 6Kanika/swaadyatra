import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Street food spread",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80",
    alt: "Local market stall",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    alt: "Famous Indian dish",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    alt: "Travelers enjoying food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    alt: "Street food close-up",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
    alt: "Local cuisine",
    span: "",
  },
];

export default function PhotoGallery() {
  return (
    <section className="py-20 px-4 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF9F1C] font-semibold uppercase tracking-widest text-sm">
            Visual Memories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
            A Taste of Every Journey
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Street food, local markets, iconic dishes — captured by our community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-3 h-[480px] md:h-[420px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
