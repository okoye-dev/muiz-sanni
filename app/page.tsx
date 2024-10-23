import CaseStudies from "@/components/CaseStudies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScopeOfWork from "@/components/ScopeOfWork";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg py-6 text-gray-white">
      <Navbar />
      <Hero />
      <ScopeOfWork />
      <CaseStudies />
    </div>
  );
}
