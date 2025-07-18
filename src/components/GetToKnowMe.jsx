import { Send } from "lucide-react";
import { Link } from "react-router-dom";



import avatarImage from "@/assets/images/avatar.png";
import notebookImage from "@/assets/images/Notebook.png";
import bookshelfImage from "@/assets/images/Bookshelf.png";
import techStackImage from "@/assets/images/Tech-Stack.png";

const cardData = [
  {
    id: "about",
    title: "About me",
    description: "Who I am and what I do",
    imageSrc: avatarImage, 
    imageAlt: "Eihab's avatar",
    imageContainerClassName: "justify-start",
    imageClassName: "max-h-[160px]",
  },
  {
    id: "notebook",
    title: "Notebook",
    description: "My thoughts, insights, and reflections",
    imageSrc: notebookImage,
    imageAlt: "Notebook",
    imageContainerClassName: "justify-end",
    imageClassName: "max-h-[180px]",
  },
  {
    id: "bookshelf",
    title: "Bookshelf",
    description: "Books and pieces of wisdom I've enjoyed reading",
    imageSrc: bookshelfImage,
    imageAlt: "Books",
    imageContainerClassName: "justify-center",
    imageClassName: "max-h-[150px] w-full",
  },
  {
    id: "tech-stack",
    title: "Tech Stack",
    description: "The dev tools, apps, devices, and games I use and play.",
    imageSrc: techStackImage,
    imageAlt: "Tech Stack Logos",
    imageContainerClassName: "justify-end",
    imageClassName: "max-h-[150px] dark:invert",
  },
];

const GetToKnowMe = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-[32px] md:text-[48px] leading-[100%] tracking-[0] mb-12 text-left">
          Get to know me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-full h-[350px] bg-gray-50 dark:bg-[#0D0D0D] rounded-xl p-8 flex flex-col justify-between border border-gray-200 dark:border-[#323232] shadow-sm"
            >
              <div className="text-left">
                <h3 className="font-bold text-[24px] mb-2">{card.title}</h3>
                <p className="font-normal text-[16px] text-[#808080] dark:text-[#808080]/80">
                  {card.description}
                </p>
              </div>
              {card.imageSrc && (
                <div
                  className={`flex ${
                    card.imageContainerClassName || "justify-center"
                  }`}
                >
                  <img
                    src={card.imageSrc || "/placeholder.svg"}
                    alt={card.imageAlt}
                    className={`w-auto object-contain ${
                      card.imageClassName || ""
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between bg-gray-50 dark:bg-[#0D0D0D] rounded-xl p-8 md:p-12 w-full">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="font-bold text-[28px] md:text-[32px] leading-[100%] tracking-[0] mb-2">
              Let’s work together
            </h2>
            <p className="font-normal text-[16px] text-[#808080] dark:text-[#808080]/80 max-w-full sm:max-w-md mx-auto md:mx-0 ">
              Want to discuss an opportunity to create something great? I'm
              ready when you are.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-black dark:bg-white text-white dark:text-black px-7 py-[14px] rounded-[8px] text-[16px] font-medium hover:opacity-90 transition-all duration-200 hover:-translate-y-[1px] flex items-center gap-2 whitespace-nowrap"
          >
            Get in touch
            <Send className="-rotate-45 h-[20px] w-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetToKnowMe;