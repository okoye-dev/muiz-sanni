import trustmobile from "@/assets/images/trustmobile.webp";
import memovision from "@/assets/images/memovision.webp";
import mycashier from "@/assets/images/mycashier.webp";
import tonderbot from "@/assets/images/tonderbot.webp";

import twitter from "@/assets/svgs/twitter.svg";
import linkedin from "@/assets/svgs/linkedin.svg";
import dribble from "@/assets/svgs/dribble.svg";
import figma from "@/assets/svgs/figma.svg";
import instagram from "@/assets/svgs/instagram.svg";

export const CONFIG = {
  scopeOfWork: {
    pills: [
      "Fintech",
      "Banking",
      "Ecommerse",
      "Saas",
      "Web3",
      "HealthCare",
      "Entertainment",
    ],
  },

  caseStudies: {
    projects: [
      {
        id: 1,
        img: trustmobile,
        name: "TrustMobile",
        units: ["BANKING", "MOBILE", "PRODUCT DESIGN"],
        link: "https://trustmobile.com/",
      },
      {
        id: 2,
        img: tonderbot,
        name: "TonderBot",
        units: ["WEB3", "LANDING PAGE", "PRODUCT DESIGN", "BRANDING"],
        link: "https://trustmobile.com/",
      },
      {
        id: 3,
        img: memovision,
        name: "MemoVision",
        units: ["ENTERTAINMENT", "MOBILE", "PRODUCT DESIGN", "BRANDING"],
        link: "https://trustmobile.com/",
      },
      {
        id: 4,
        img: mycashier,
        name: "MyCashier",
        units: ["FINTECH", "MOBILE", "LANDING PAGE", "PRODUCT DESIGN"],
        link: "https://trustmobile.com/",
      },
    ],
  },

  workExperience: [
    {
      id: 1,
      timeFrame: "DEC 2023 - FEB 2024",
      title: "Product Designer",
      company: "Soillight",
      link: "https://afrihacks.com/",
      description:
        "Revamped Soillight's mobile app interface to enhance user experience across diverse demographics, optimizing the purchasing journey. Developed a high-impact landing page to clarify Soillight's functionalities for new users. These initiatives resulted in a substantial 46% increase in user engagement.",
    },
    {
      id: 2,
      timeFrame: "DEC 2023 - FEB 2024",
      title: "Brand Designer",
      company: "AfriHacks Hackathon",
      link: "https://afrihacks.com/",
      description:
        "Revamped Soillight's mobile app interface to enhance user experience across diverse demographics, optimizing the purchasing journey. Developed a high-impact landing page to clarify Soillight's functionalities for new users. These initiatives resulted in a substantial 46% increase in user engagement.",
    },
    {
      id: 3,
      timeFrame: "DEC 2023 - FEB 2024",
      title: "Product Designer",
      company: "MDot Technologies",
      link: "https://afrihacks.com/",
      description:
        "Revamped Soillight's mobile app interface to enhance user experience across diverse demographics, optimizing the purchasing journey. Developed a high-impact landing page to clarify Soillight's functionalities for new users. These initiatives resulted in a substantial 46% increase in user engagement.",
    },
  ],

  footerLinks: [
    {
      name: "Twitter",
      img: twitter,
      link: "https://twitter.com/sanni_muiz",
    },
    {
      name: "LinkedIn",
      img: linkedin,
      link: "https://www.linkedin.com/in/sanni-muiz-9b8b491a7/",
    },
    {
      name: "Dribble",
      img: dribble,
      link: "https://dribble.com/sannimuiz",
    },
    {
      name: "Figma",
      img: figma,
      link: "https://figma.com/sannimuiz",
    },
    {
      name: "Instagram",
      img: instagram,
      link: "https://instagram.com/sannimuiz",
    },
  ],
};
