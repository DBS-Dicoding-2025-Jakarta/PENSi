import AboutTeam from "./components/AboutTeam";
import InformationCenter from "./components/informationCenter";
import LandingSection from "./components/LandingSection";
import Statistics from "./components/Statistics";
import Subscription from "./components/Subscription";
import Testimoni from "./components/tesimoni";

export default function Home() {
  return (
    <main className="max-w-screen-xxl mx-auto lg:px-0 pt-16 md:pt-20">
      <LandingSection />
      <AboutTeam />
      <Statistics />
      <Testimoni />
      <InformationCenter />
      <Subscription />
    </main>
  );
}
