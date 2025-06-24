const gstPainPoints = [
  {
    img: "/images/state-issues.png",
    title: "Different states. Different rules. One huge headache.",
    desc: "Multi-state operations come with a pile of complications: registrations, reverse charges, e-invoicing, HSN codes… sound familiar?",
  },
  {
    img: "/images/overloaded-ca.png",
    title: "Our CA is great. But overloaded.",
    desc: "Even the best professionals are spread thin. And you’re the one carrying the risk when something slips.",
  },
  {
    img: "/images/costly-mistake.png",
    title: "One mistake can cost us lakhs.",
    desc: "Late filings, missed ITC, poor reconciliation—these add up to real financial loss and audit risk.",
  },
  {
    img: "/images/unknown-risk.png",
    title: "I don’t know what I don’t know.",
    desc: "GST laws evolve constantly, and most teams miss critical changes until penalties land. Even “filed” returns aren’t safe if they’re wrong.",
  },
  {
    img: "/images/panic-mode.png",
    title: "We’re always reacting. Never ahead.",
    desc: "From mismatch notices to late-night reconciliations, most GST work is panic-mode compliance, not proactive peace of mind.",
  },
];

export default function GSTCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left lg:text-left w-full md:w-[60%] lg:w-[60%]">
            From mismatch notices to late-night reconciliations, <br />
            most GST work is panic-mode compliance, not proactive peace of mind.
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {gstPainPoints.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="h-36 flex justify-center items-center bg-gray-100">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-24 object-contain"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-grow">
                <h3 className="text-sm font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
