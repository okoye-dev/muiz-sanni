import trustmobile from "@/assets/images/trustmobile.webp";
import memovision from "@/assets/images/memovision.webp";
import mycashier from "@/assets/images/mycashier.webp";
import tonderbot from "@/assets/images/tonderbot.webp";

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
};
