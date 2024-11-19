import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";
import PraySection from "./components/pray-section";
import WhoAreWeSection from "./components/who-are-we-section";
import WTalksSection from "./components/wtalks-section";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeaturesSection />
      <div
        className="bg-fixed"
        style={{
          backgroundImage: "url('/marble-bg.webp')"
        }}
      >
        <div className="w-lg-container mx-auto">
          <WTalksSection />
        </div>
        <PraySection />
      </div>
      <WhoAreWeSection />
    </main>
  );
}