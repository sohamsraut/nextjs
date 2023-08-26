import HomePageComponent from "@/components/homePage";
import Head from "next/head";
import AboutSection from "@/components/about";
import Footer from "@/components/Footer";
import SkillSection from "@/components/skills";
import EducationSection from "@/components/education";
import ExperienceSection from "@/components/experience";
import ProjectSection from "@/components/projects";
import ContactForm from "@/components/contactForm";
import { useState, useEffect } from "react";
import LoaderComponent from "@/components/loader";

// #1b1b1b and #ffb400
export default function home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Don't forget to remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (loading) {
    setTimeout(() => {setLoading(false)}, 3000);
    return <LoaderComponent />
  }
  return (
    <div className="w-full h-full flex flex-col">
      <Head>
        <title>Soham Raut | Home</title>
      </Head>
      <HomePageComponent width={windowSize.width}/>
      <AboutSection />
      <SkillSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactForm />
      <Footer />
    </div>
  )
}