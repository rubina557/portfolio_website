import { Link } from "react-router-dom";

import lightPortraitImage from "../assets/images/Circle-Portrait.png";
import darkPortraitImage from "../assets/images/dark-Circle-Portrait.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] mx-auto gap-8 md:gap-16">
        <div className="flex-1 max-w-[600px] text-center md:text-left">
          <h1 className="font-inter font-normal text-[40px] leading-[100%] tracking-[0] mb-4 sm:text-[48px] md:text-[64px] lg:text-[88px]">
            <span className="text-[#9ca3af] dark:text-[#808080]">I'm </span>
            <span className="font-bold text-[#111827] dark:text-white">
              Eihab Khan
            </span>
          </h1>
          <p className="font-normal text-[16px] leading-[158%] tracking-[0em] text-[#6b7280] dark:text-[#808080] mb-8 max-w-[500px] mx-auto md:mx-0 sm:text-[18px]">
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <button className="bg-[#111827] dark:bg-[#0D0D0D] text-white px-7 py-[14px] rounded-[8px] text-[16px] font-medium hover:bg-[#1f2937] dark:hover:bg-[#1a1a1a] transition-all duration-200 hover:-translate-y-[1px]">
              See my resume
            </button>

            <Link
              to="/contact"
              className="bg-transparent text-[#374151] dark:text-[#808080] border-[1.5px] border-[#d1d5db] dark:border-[#323232] px-7 py-[14px] rounded-[8px] text-[16px] font-medium hover:bg-[#f9fafb] dark:hover:bg-[#0D0D0D] hover:border-[#9ca3af] dark:hover:border-[#404040] transition-all duration-200 hover:-translate-y-[1px]"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-[#e5e7eb] dark:bg-[#1a1a1a] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={lightPortraitImage}
              alt="Portrait in light mode"
              className="dark:hidden w-full h-full object-cover"
            />
            <img
              src={darkPortraitImage}
              alt="Portrait in dark mode"
              className="hidden dark:block w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
