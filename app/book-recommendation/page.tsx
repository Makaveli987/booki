import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import WeeklyRecommendations from "@/components/weekly-recommendations";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      {/* <FormSection /> */}
      <HowItWorks />
      <FAQ />
      <WeeklyRecommendations />
      <Footer />
    </div>
  );
}
