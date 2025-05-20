import AboutPage from "@/components/AboutTeam";
import LandingSection from "@/components/hero";
import Blog from "@/components/informationCenter";
import PensiStatistics from "@/components/statistik";
import Footer from "@/components/Subcribtion";
import Testimoni from "@/components/tesimoni";
export default function Home() {
  return (
    <main>
      <LandingSection />
      <AboutPage />
      <PensiStatistics />
      <Testimoni />
      <Blog />
      <Footer />
    </main>
  );
}
