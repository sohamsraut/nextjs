import HomePageComponent from "@/components/homePage";
import Head from "next/head";
import AboutSection from "@/components/about";
import Footer from "@/components/Footer";
import SkillSection from "@/components/skills";
import EducationSection from "@/components/education";
import ExperienceSection from "@/components/experience";
import ProjectSection from "./components/projects";
import ContactForm from "./components/contactForm";
import { ToastContainer } from "react-toastify";

export default function largeDeviceView() {
  return (
    <div className="w-full h-full flex flex-col">
          <Head>
            <title>Soham Raut | Home</title>
          </Head>
          <HomePageComponent />
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