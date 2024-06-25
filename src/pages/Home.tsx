import { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import { scrollToTop } from "../lib/utils";

const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Hero />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;
