// components/CallToActionSection.jsx
import React from "react";

const CallToActionSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mt-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-left">
          GST,Sorted.
          <br /> For Every Buisness,
          <br /> Every Rupee, Every <br /> Deadline.
        </h2>
        <p className="mt-4 text-lg text-gray-600 w-full md:w-[50%] lg:w-[50%] text-justify">
          From Startups to conglomerates, we handle your GST
          filings,reconciliations,notices and compliance- so you never miss a
          deadline or loase a night's sleep. Powered by experts. Driven by
          trust. Built for Bharat.{" "}
        </p>

        {/* <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Request a demo
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition">
            Take a product tour
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CallToActionSection;
