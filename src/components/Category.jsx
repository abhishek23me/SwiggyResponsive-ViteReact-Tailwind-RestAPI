import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Category = ({ categories }) => {
  const [slide, setSlide] = useState(0);

  const prevslide = () => {
    if (slide === 0) return false;
    setSlide(slide - 4);
  };

  const nextslide = () => {
    if (categories.length - 8 === slide) return false;
    setSlide(slide + 4);
  };

  return (
    <div className="max-w-[1130px] mx-auto pt-3">
      <div className="flex items-center justify-between px-4">
        <div className="text-[18px] xl:text-[23px] font-extrabold">What's on your mind?</div>
        <div className="hidden md:flex">
          <div
            onClick={prevslide}
            className="cursor-pointer flex justify-center items-center w-[35px] h-[35px] bg-[#e2e2e7] rounded-full"
          >
            <FaArrowLeftLong />
          </div>
          <div
            onClick={nextslide}
            className="cursor-pointer flex justify-center items-center w-[35px] h-[35px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <div
        className="flex overflow-x-auto mt-2 md:mt-10 scrollbar-hide space-x-0 md:space-x-4"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="w-[120px] md:w-[143px] flex-grow shrink-0 snap-center"
              style={{ transform: `translateX(-${slide * 100}%)`, transition: "transform 0.5s ease" }}
            >
              <img src={category.image} alt="" className="w-full h-auto" />
            </div>
          );
        })}
      </div>
      <hr className="my-3 lg:my-7 border-[1px]" />
    </div>
  );
};

export default Category;
