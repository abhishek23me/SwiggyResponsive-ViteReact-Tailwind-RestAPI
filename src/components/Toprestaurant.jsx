import React, { useState, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Cards from "./Cards";

const Toprestaurant = ({ data }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    const scrollPercentage = (currentScroll / maxScrollLeft) * 100;
    setScrollPosition(scrollPercentage);
  };

  return (
    <div className="max-w-[1130px] mx-auto mb-[14px] lg:mb-[30px]">
      <div className="flex items-center justify-between px-4 mb-1 lg:mb-5">
        <div className="text-[18px] xl:text-[23px] font-extrabold">
          Top restaurant chains in Udaipur
        </div>
        <div className="hidden md:flex">
          <div
            onClick={() => {
              containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
            }}
            className="cursor-pointer flex justify-center items-center w-[35px] h-[35px] bg-[#e2e2e7] rounded-full"
          >
            <FaArrowLeftLong />
          </div>
          <div
            onClick={() => {
              containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
            }}
            className="cursor-pointer flex justify-center items-center w-[35px] h-[35px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex mx-1 xl:gap-18 overflow-x-auto relative scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // For Firefox and IE
      >
        {/* Hide scrollbar for Webkit browsers */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {data.map((d, i) => (
          <div key={i} className="flex-grow">
            <Cards {...d} />
          </div>
        ))}
      </div>
      <div className="relative w-14 mt-4 mx-auto h-[4px] bg-gray-300 rounded">
        <div
          style={{
            width: `9px`,
            transform: `translateX(${(scrollPosition / 100) * (56 - 9)}px)`, // Scale based on available space
            transition: "transform 0.2s ease-out",
          }}
          className="h-full bg-[#ff5200] rounded"
        />
      </div>
      <hr className="mt-5 lg:mt-14 border-[1px]" />
    </div>
  );
};

export default Toprestaurant;
