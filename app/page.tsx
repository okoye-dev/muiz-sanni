import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScopeOfWork from "@/components/ScopeOfWork";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-bg pt-6 text-gray-white">
      <div className="relative max-w-[100rem] overflow-y-hidden">
        <Navbar />
        <Hero />
        <ScopeOfWork />
        <CaseStudies />
        <WorkExperience />
        <Footer />
      </div>
    </div>
  );
}
