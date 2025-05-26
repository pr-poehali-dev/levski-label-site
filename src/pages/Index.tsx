import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
