import { ArrowRight, Send, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const projectData = [
  {
    id: "subbi",
    iconSrc: "/src/assets/images/Subbi.png",
    title: "Subbi — The free subscriptions manager",
    description:
      "Subbi is a side project that I've built to help me keep track of how much I spend on subscriptions and also to prevent the 'accidental' bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
    linkText: "Download App",
    linkHref: "#",
    imageSrc: "/src/assets/images/iPhone 14.png",
    imageAlt: "Subbi App Screenshot",
    isTilted: true,
  },
  {
    id: "react-docs",
    iconSrc: "/src/assets/images/React Docs.png",
    title: "React Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
    linkText: "Visit Site",
    linkHref: "#",
    imageSrc: "/src/assets/images/iPad & Apple Pencil.png",
    imageAlt: "React Docs Screenshot",
    isTilted: true,
  },
  {
    id: "storybook-docs",
    iconSrc: "/src/assets/images/Storybook Docs.png",
    title: "Storybook Documentation",
    description:
      "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
    linkText: "Visit Site",
    linkHref: "#",
    imageSrc: "/src/assets/images/browser.png",
    imageAlt: "Storybook Docs Screenshot",
    isTilted: false,
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen   text-gray-900 dark:text-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="font-bold text-[42px] md:text-[48px] leading-[100%] tracking-[0] mb-12 text-center md:text-left">
          {"Projects"}
          <p className="text-[24px] text-[#80808080] font-normal">{"Projects and ideas I’ve worked on"}</p>
        </h2>
        <div className="flex flex-col gap-12">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-[#0D0D0D] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200 dark:border-[#323232] shadow-sm w-full max-w-4xl mx-auto"
            >
              <div className="flex-1 text-center md:text-left">
                <img
                  className="mb-4 w-12 h-12 object-contain block mx-auto md:mx-0"
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
              <div className="flex-1 flex justify-center items-center md:justify-end">
                <img
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.imageAlt}
                  className={`w-full max-w-[300px] md:max-w-[400px] h-auto object-contain shadow-lg rounded-lg ${
                    project.isTilted ? "transform rotate-3 md:rotate-6" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-12 lg:ml-10">
        <div className="bg-gray-50 dark:bg-[#0D0D0D] rounded-xl p-6 md:p-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 border border-gray-200 dark:border-[#323232] shadow-sm w-full lg:w-[900px] lg:h-[470px]">
          <div className="flex-1 text-center lg:text-left">
            <img
              src="/src/assets/images/Parrotxt.png"
              alt="Parrotxt icon"
              className="mb-4 w-16 h-16 object-contain block mx-auto lg:mx-0"
            />
            <h3 className="font-bold text-[28px] leading-tight mb-2">Parrotxt</h3>
            <p className="font-normal text-[16px] text-[#808080] dark:text-[#808080]/80 mb-6">
              {"Lorem ipsum Is Not Professional, use Parrotxt to generate real text for your design."}
              <br />
              {"This was my first product I launched on Product Hunt"}
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-[#111827] dark:text-white font-medium hover:underline transition-colors lg:mt-40"
            >
              Visit Site <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex-1 flex flex-col gap-4 w-full lg:w-auto">
            <div className="dark:bg-[#1A1A1A] rounded-lg p-4 text-gray-900 dark:text-white bg-white text-sm max-w-xs mx-auto lg:mx-0">
              {"Lorem ipsum dolor sit amet consectetur. Adipiscing vel faucibus sit enim venenatis pretium."}
              <span role="img" aria-label="sad face emoji">
                😔
              </span>
            </div>
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-4 text-gray-900 dark:text-white text-sm max-w-xs mx-auto lg:ml-40 lg:mr-0">
              {"Blog single-origin coffee keffiyeh disrupt air plant. Actually 90's beard, four enamel pin salvia."}
              <span role="img" aria-label="happy face emoji">
                {" "}
                🤩
              </span>
            </div>
          </div>
        </div>
      </div>
  <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-12 lg:ml-10">
        <div className="bg-gray-50 dark:bg-[#0D0D0D] rounded-xl p-6 md:p-8 border border-dashed border-gray-300 dark:border-[#323232] text-center flex flex-col items-center justify-center min-h-[300px] w-full lg:w-[900px] lg:h-[470px]">
          <Sparkles className="w-12 h-12 text-gray-400 dark:text-gray-600 mb-4" />
          <h2 className="font-bold text-[32px] md:text-[48px] leading-[100%] tracking-[0] mb-4 text-gray-900 dark:text-white">
            YOUR PROJECT GOES HERE
          </h2>
          <p className="font-normal text-[16px] text-[#808080] dark:text-[#808080]/80 mb-8">
            Let's turn your idea into a visual reality
          </p>
          {/* --- The changed part is here --- */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-opacity"
          >
            Get in touch <Send className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}