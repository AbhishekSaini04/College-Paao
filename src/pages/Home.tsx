import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import ProgramCards from "../components/home/ProgramCards";
import FAQ from "../components/home/FAQ";
// import CTA from "../components/home/CTA";
import Testimonials from "../components/home/Testimonials";
import YouTubeSection from "../components/home/YoutubeSection";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <ProgramCards />
        <br />
        <Testimonials />
        <br />
        <YouTubeSection />
        <br />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
