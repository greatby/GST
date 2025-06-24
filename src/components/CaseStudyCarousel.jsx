import { useRef, useState, useEffect } from "react";

const CaseStudyCarousel = ({ data }) => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);


  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const scrollToPage = (pageIndex) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth * pageIndex;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    setCurrentPage(pageIndex);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const pageWidth = container.offsetWidth;
    const index = Math.round(scrollLeft / pageWidth);
    setCurrentPage(index);
  };

  return (
    <div className="w-full py-10 px-4">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth scroll-px-6 snap-x snap-mandatory gap-4 scrollbar-hide"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="snap-start border border-[#00000012] shrink-0 w-[90%] sm:w-[48%] lg:w-[32%] bg-white rounded-2xl shadow p-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-green-600 font-medium cursor-pointer">
              Read the story &rsaquo;
            </p>
          </div>
        ))}
      </div>


      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
            className={`h-3 w-3 rounded-full transition ${
              currentPage === i ? "bg-green-500 w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCarousel;
