import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import { scrollToTop } from "../lib/utils";

const Home = () => {
  const location = useLocation();
  const hash = location.hash;

  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    if (hash) scrollIntoView(hash.slice(1));
  }, [hash]);

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
