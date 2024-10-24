import React, { FC } from "react";
import quotes from "@/assets/svgs/quotes.svg";
import Image from "next/image";
import SuperscriptHeader from "./SuperscriptHeader";
import { CONFIG } from "@/config";
import ExperienceCard from "./ExperienceCard";

// interface IProps {}

const WorkExperience: FC = () => {
  const experiences = CONFIG.workExperience;

  return (
    <div className="px-6 py-20 md:px-14 lg:px-20">
      <div className="flex items-center gap-3 font-light tracking-widest text-white/50">
        <Image src={quotes} alt="quotes" width={18} height={18} />
        <h2 className="text-sm md:text-base lg:text-xl">EXPERIENCE</h2>
      </div>

      <SuperscriptHeader
        text="Work Experience"
        plainSubscript
        className="flex pb-2 pt-3 text-4xl font-semibold tracking-[-0.075em] xs:text-5xl md:text-[4.5vw] lg:text-[5.5vw]"
      />

      <div className="flex flex-col gap-10 pt-10">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
