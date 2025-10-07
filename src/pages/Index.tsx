import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WorkshopExamples from "@/components/WorkshopExamples";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WorkshopExamples />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
