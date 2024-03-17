import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import UpcomingWebniars from "@/components/UpcomingWebniars";
import Whychoseus from "@/components/Whychoseus";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourse />
        <Whychoseus />
        <Testimonials />
        <UpcomingWebniars />
      </div>
    </>
  );
}
