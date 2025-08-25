import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <main>
      <NavBar />
      <HeroSection />
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
};

export default App;
