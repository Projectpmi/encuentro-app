import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentiation } from "@/components/Differentiation";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { WhyEncuentro } from "@/components/WhyEncuentro";
import { Security } from "@/components/Security";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyEncuentro />
        <HowItWorks />
        <Differentiation />
        <UpcomingEvents />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
