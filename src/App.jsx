import Footer from "./components/footer";
import GSTCards from "./components/GSTCards";
import HorizontalCardSlider from "./components/GstCardSlider";
import GstPainPointsSlider from "./components/GstCardSlider";
import CallToActionSection from "./components/hero";
import Navbar from "./components/navbar";
import SuiteCards from "./components/suiteCards";
import TestimonialAccordion from "./components/testimonialAccordian";
import VerticalCarousel from "./components/verticalCarousel";
import { gridOne,gridTwo,gridThree } from "./utils/data";

export default function App() {
  return (
    <div>
      <Navbar />
      <CallToActionSection />
      <GSTCards />
      <HorizontalCardSlider
        title={
          "The endless cycle of deadlines and documentation that takes you away from your real work."
        }

        cards={gridOne}
      />
      <HorizontalCardSlider
        title={
          "The rules seem to constantly change, leaving you second-guessing critical business decisions."
        }

        cards={gridTwo}
      />
      <HorizontalCardSlider
        title={
          "The practical, day-to-day issues that drain your energy and resources."
        }

        cards={gridThree}
      />
      {/* <VerticalCarousel />
      <SuiteCards/>
      <TestimonialAccordion /> */}
      <Footer />
    </div>
  );
}
