import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Offer from "@/components/Offer";
import WhyStudent from "@/components/WhyStudent";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Offer />
        <WhyStudent />
        <HowItWorks />
        <Faq />
        <ApplySection />
      </main>
      <Footer />
    </>
  );
}
