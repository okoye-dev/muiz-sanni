import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScopeOfWork from "@/components/ScopeOfWork";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg py-6 text-gray-white">
      <Navbar />
      <Hero />
      <ScopeOfWork />
      <CaseStudies />
      <WorkExperience />
      <Footer />
    </div>
  );
}
