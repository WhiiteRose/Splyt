import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./components/NavBar";
import BenefitSection from "./sections/BenefitSection";
import FlavourSection from "./sections/FlavourSection";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import NutritionSection from "./sections/NutritionSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />

          <div>
          <BenefitSection />
          <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
