import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./components/NavBar";
import FlavourSection from "./sections/FlavourSection";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";

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
        </div>
      </div>
    </main>
  );
};

export default App;
