
export default function Slide({ title, desc, author, image, bg = "bg-white",cards=[] }) {
  return (
    <section className={`min-h-screen w-full snap-start ${bg}`}>
      <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-8 px-6 py-12 max-w-7xl mx-auto overflow-hidden">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
            <p className="mt-4 text-lg text-gray-600">{desc}</p>
          </div>

          {author?.quote && (
            <>
              <div className="h-[1px] bg-gray-300 w-16" />
              <div className="flex items-start gap-4">
                {author?.photo && (
                  <div className="flex-shrink-0">
                    <img
                      src={author.photo}
                      alt={author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {author.logo && (
                      <img src={author.logo} alt="Company logo" className="w-6 mt-2" />
                    )}
                  </div>
                )}
                <div>
                  <blockquote className="italic text-gray-700">“{author.quote}”</blockquote>
                  <div className="font-semibold mt-2">{author.name}</div>
                  {author.role && author.company && (
                    <div className="text-sm text-gray-500">
                      {author.role}, {author.company}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Column – Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((point, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg mb-2">{point.title}</h4>
              <p className="text-sm text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

