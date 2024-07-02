import Footer from "@/components/footer";
import FormSection from "@/components/form-section";
import Hero from "@/components/hero";
import WeeklyRecommendations from "@/components/weekly-recommendations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <FormSection /> */}
      <WeeklyRecommendations />
      <Footer />
    </div>
  );
}
