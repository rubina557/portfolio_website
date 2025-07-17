import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-[8px] ">
          <h1 className="ont-inter font-bold  text-[48px] md:text-[80px] leading-[100%] tracking-[0] align-bottom">
            Get in touch{" "}
          </h1>
          <p className="  font-normal text-[24px] leading-[100%] tracking-[-0.019em] text-[#808080]/80">
            Let’s build something awesome.
          </p>
        </div>

        <div className="border-t border-[#C5C5C5] dark:border-gray-700 my-10"></div>

        <div className="bg-[#F6F6F6] rounded-[12px] border border-solid px-2 py-2">
          {/* form-top */}
          <div className="flex items-center justify-between py-1 mb-2">
            <div className=" flex gap-2">
              <span className="w-[12px] h-[12px] rounded-full border border-[#D62929] bg-[#F73636]"></span>
              <span className="w-[12px] h-[12px] rounded-full border border-[#CEA435] bg-[#F7C136]"></span>
              <span className="w-[12px] h-[12px] rounded-full border border-[#53CC28] bg-[#68F736]"></span>
            </div>
            <div className="font-medium text-[16px] leading-[100%] tracking-[0] font-inter">
              New message
            </div>
            <div></div>
          </div>
          {/* form-top-end */}
          {/* form-section */}
          <div className="px-3">
            <form action="">
              <label
                htmlFor="email"
                className="font-medium text-[16px] leading-[100%] tracking-[0] "
              >
                Email:
              </label>
              <input
                type="email"
                className=" h-[19px] px-3 opacity-100 placeholder-[#808080] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[100%] placeholder:tracking-[0] bg-transparent focus:outline-none"
                placeholder="Enter your email address"
              />
              <div className="border-t border-[#C5C5C5] dark:border-gray-700 my-2"></div>

              <label
                htmlFor="name"
                className="font-medium text-[16px] leading-[100%] tracking-[0] "
              >
                Name:
              </label>
              <input
                type="text"
                className=" h-[19px] px-3 opacity-100 placeholder-[#808080] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[100%] placeholder:tracking-[0] bg-transparent focus:outline-none"
                placeholder="Enter your name"
              />
              <div className="border-t border-[#C5C5C5] dark:border-gray-700 my-2"></div>
              <label
                htmlFor="subject"
                className="font-medium text-[16px] leading-[100%] tracking-[0] "
              >
                Subject:
              </label>
              <input
                type="text"
                className=" h-[19px] px-3 opacity-100 placeholder-[#808080] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[100%] placeholder:tracking-[0] bg-transparent focus:outline-none"
                placeholder="Enter subject"
              />
              <div className="border-t border-[#C5C5C5] dark:border-gray-700 my-2"></div>
              <textarea
                name="subject"
                className="w-full mt-2 focus:outline-none py-2 px-2 bg-[#F3F3F3] rounded-[12px]"
                id="subject"
                cols="20"
                rows="7"
                placeholder="Write your message here"
              ></textarea>


              <div className="flex justify-end mt-3 items-center">
              <button type="submit" className=" w-[161px] h-[60px] rounded-[9px] px-6  bg-[#0D0D0D] text-white text-center ">Send</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
