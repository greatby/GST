import CaseStudyCarousel from "./components/CaseStudyCarousel";
import Footer from "./components/footer";
import GSTCards from "./components/GSTCards";
import HorizontalCardSlider from "./components/GstCardSlider";
import GstPainPointsSlider from "./components/GstCardSlider";
import CallToActionSection from "./components/hero";
import Navbar from "./components/navbar";
import FeatureTabs from "./components/showcase";
import SuiteCards from "./components/suiteCards";
import TestimonialAccordion from "./components/testimonialAccordian";
import VerticalCarousel from "./components/verticalCarousel";
import { caseStudies } from "./utils/data";

export default function App() {
  return (
    <div>
      <Navbar />
      <CallToActionSection />
      <VerticalCarousel />
     <FeatureTabs />
     <CaseStudyCarousel data={caseStudies}/>
      <Footer />
    </div>
  );
}
