import AboutPage from "@/app/components/AboutTeam";
import LandingSection from "@/app/components/hero";
import Blog from "@/app/components/informationCenter";
import PensiStatistics from "@/app/components/statistik";
import Footer from "@/app/components/Subcribtion";
import Testimoni from "@/app/components/tesimoni";
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
