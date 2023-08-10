import HomePageComponent from "@/components/homePage";
import Head from "next/head";
import AboutSection from "@/components/about";
import Footer from "@/components/Footer";

// #1b1b1b and #ffb400
export default function home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Head>
        <title>Home | Soham Raut</title>
      </Head>
      <HomePageComponent />
      <AboutSection />
      <Footer />
    </div>
  )
}