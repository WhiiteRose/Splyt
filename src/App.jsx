import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
};

export default App;
