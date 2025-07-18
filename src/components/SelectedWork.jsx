import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import subbiIcon from "@/assets/images/Subbi.png";
import iphoneImage from "@/assets/images/iPhone-14.png";
import reactDocsIcon from "@/assets/images/React-Docs.png";
import ipadImage from "@/assets/images/iPad-and-Apple-Pencil.png";
import storybookDocsIcon from "@/assets/images/Storybook-Docs.png";
import browserImage from "@/assets/images/browser.png";


const projectData = [
  {
    id: "subbi",
    iconSrc: subbiIcon, 
    title: "Subbi — The free subscriptions manager",
    description:
      "Subbi is a side project that I've built to help me keep track of how much I spend on subscriptions and also to prevent the 'accidental' bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
    linkText: "Download App",
    linkHref: "#",
    imageSrc: iphoneImage, 
    imageAlt: "Subbi App Screenshot",
    isTilted: true,
  },
  {
    id: "react-docs",
    iconSrc: reactDocsIcon, 
    title: "React Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
    linkText: "Visit Site",
    linkHref: "#",
    imageSrc: ipadImage, 
    imageAlt: "React Docs Screenshot",
    isTilted: true,
  },
  {
    id: "storybook-docs",
    iconSrc: storybookDocsIcon, 
    title: "Storybook Documentation",
    description:
      "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
    linkText: "Visit Site",
    linkHref: "#",
    imageSrc: browserImage, 
    imageAlt: "Storybook Docs Screenshot",
    isTilted: false,
  },
];


const SelectedWork = () => {
  return (
    <div className=" text-gray-900 dark:text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-[32px] md:text-[48px] leading-[100%] tracking-[0] mb-12 text-left">
          Selected Work
        </h2>
        <div className="flex flex-col gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-[#0D0D0D] rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200 dark:border-[#323232] shadow-sm w-full"
            >
              <div className="md:w-[55%] text-left">
                <img
                  className="mb-4 w-12 h-12 object-contain"
                  src={project.iconSrc || "/placeholder.svg"}
                  alt={project.title + " icon"}
                />
                <h3 className="font-bold text-[24px] md:text-[28px] leading-tight mb-4">{project.title}</h3>
                <p className="font-normal text-[16px] text-[#808080] dark:text-[#808080]/80 mb-6">
                  {project.description}
                </p>
                <Link
                  to={project.linkHref}
                  className="inline-flex items-center gap-2 text-[#111827] dark:text-white font-medium hover:underline transition-colors"
                >
                  {project.linkText} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="md:w-[45%] flex justify-center md:justify-end items-center">
                <img
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.imageAlt}
                  className={`w-full max-w-[300px] md:max-w-[400px] h-auto object-contain ${
                    project.isTilted ? "transform md:-rotate-6" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;