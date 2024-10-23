import React, { FC } from "react";
import CasetStudyCard from "./CaseStudyCard";
import { CONFIG } from "@/config";
import SuperscriptHeader from "./SuperscriptHeader";

// interface IProps {}

const CaseStudies: FC = () => {
  const projects = CONFIG.caseStudies.projects;

  return (
    <div className="px-6 md:px-14 lg:px-20">
      <SuperscriptHeader
        text="Case Studies"
        superscript="FEATURED (4)"
        plainSubscript
        className="flex justify-center pb-2 pt-12 text-4xl font-semibold tracking-[-0.075em] xs:text-5xl md:text-[6.5vw] lg:text-[5.5vw]"
        subscriptClasses="xs:translate-y-1"
      />

      <section className="grid grid-cols-1 justify-center gap-6 scroll-smooth sm:mb-16 lg:grid-cols-2 lg:gap-10 lg:px-[2vw] xl:gap-14 xl:px-20">
        {projects.map((project) => (
          <CasetStudyCard key={project.id} {...project} />
        ))}
      </section>

      <div className="flex w-full px-2">
        <span className="mt-10 h-[2px] w-full bg-white/10 px-6" />
      </div>
    </div>
  );
};

export default CaseStudies;
