import { useRef } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function HorizontalCardSlider({ title, cards }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.querySelector(".card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // 16px = gap
    const scrollAmount = cardWidth * 2.5; // scroll 2.5 cards at a time

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <h2 className="text-2xl md:text-3xl w-full md:w-[60%] lg:w-[60%] font-bold mb-6 text-gray-800">
            {title}
          </h2>
        )}

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 hidden md:block"
          >
            <BiChevronLeft size={24} />
          </button>

          <motion.div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth gap-4 snap-x snap-mandatory px-1 py-2 
            scrollbar-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="card shrink-0 snap-start rounded-xl bg-gray-50 shadow-md flex flex-col 
                items-center text-center p-4 w-[240px] md:w-[260px] lg:w-[280px] h-[320px]"
              >
                {card.img && (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-16 h-16 object-contain mb-4"
                  />
                )}
                <h3 className="text-md font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-5">{card.desc}</p>
              </div>
            ))}
          </motion.div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 hidden md:block"
          >
            <BiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
