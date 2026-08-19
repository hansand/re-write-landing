import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { WorksEverywhere } from "@/components/sections/WorksEverywhere";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { DeepDive } from "@/components/sections/DeepDive";
import { Providers } from "@/components/sections/Providers";
import { Privacy } from "@/components/sections/Privacy";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorksEverywhere />
        <HowItWorks />
        <FeaturesGrid />
        <DeepDive />
        <Providers />
        <Privacy />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
