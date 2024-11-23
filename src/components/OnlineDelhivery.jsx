import React, { useRef, useState, useEffect } from "react";
import Cart from "./Cart";
import { assets } from "../assets/assets";

const OnlineDelhivery = ({ data }) => {
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const { top } = componentRef.current.getBoundingClientRect();
        setIsAtTop(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-[1130px] mx-auto mb-[50px]" ref={componentRef}>
      <div className="flex items-center justify-between px-4 sm:px-4 mb-5">
        <div className="text-[18px] xl:text-[23px] font-extrabold">
          Restaurant with online food delivery in Udaipur
        </div>
      </div>
      <div
        className={`my-component ${
          isAtTop
            ? "fixed bg-white items-center w-full left-0 top-16 lg:top-0 z-[9999] flex lg:px-14"
            : ""
        }`}
      >
        <div className="max-w-[1200px] px-4 gap-2 font-semibold mx-auto flex my-5 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <div className="flex h-9 cursor-pointer items-center px-4 rounded-full border border-gray-300">
            <span className="text-[14px]">Filter</span>
            <img className="h-4 px-2.5 mt-0.5" src={assets.filter} alt="" />
          </div>
          <div className="flex h-9 cursor-pointer items-center px-3 rounded-full border border-gray-300">
            <span className="text-[14px]">Sort By</span>
            <img className="h-3 mt-1 px-2.5" src={assets.drop} alt="" />
          </div>
          <div className="flex h-9 cursor-pointer items-center px-3 rounded-full border border-gray-300">
            <span className="text-[14px]">Fast Delivery</span>
          </div>
          <div className="flex h-9 cursor-pointer items-center px-3 rounded-full border border-gray-300">
            <span className="text-[14px]">Ratings 4.0+</span>
          </div>
          <div className="flex h-9 cursor-pointer items-center px-3 rounded-full border border-gray-300">
            <span className="text-[14px]">Pure Veg</span>
          </div>
          <div className="flex h-9 cursor-pointer items-center px-3 rounded-full border border-gray-300">
            <span className="text-[14px]">Offers</span>
          </div>
          <div className="flex h-9 cursor-pointer items-center px-3 rounded-full border border-gray-300">
            <span className="text-[14px]">Rs. 300-Rs. 600</span>
          </div>
          <div className="flex h-9 cursor-pointer items-center px-3 rounded-full border border-gray-300">
            <span className="text-[14px]">Less than Rs. 300</span>
          </div>
        </div>
        <div
          className={`bg-gray-100 cursor-pointer ${
            !isAtTop ? "hidden" : "hidden xl:flex"
          }  h-12 pl-3 items-center rounded-lg`}
        >
          <span className="pr-7">Search for restaurant and food</span>
          <img className="h-5 mx-4" src={assets.search} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:mt-8 px-2">
        {data.map((item, index) => {
          return <Cart key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default OnlineDelhivery;
