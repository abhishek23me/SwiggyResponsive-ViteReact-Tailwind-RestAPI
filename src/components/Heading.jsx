import React, { useState } from "react";
import { assets } from "../../src/assets/assets";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { TbRosetteDiscount } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineMyLocation } from "react-icons/md";

const Heading = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(!toggle);
  };

  const Links = [
    {
      icon: (
        <img
          className="h-5 hover:text-[#fc8019]"
          src={assets.Corporate}
          alt=""
        />
      ),
      name: "Swiggy Corporate",
    },
    {
      icon: <IoSearch className="text-xl mt-[1px]" />,
      name: "Search",
    },
    {
      icon: <TbRosetteDiscount className="text-xl mt-[2px]" />,
      name: "Offers",
      sup: "NEW",
    },
    {
      icon: (
        <img className="h-4.5 hover:text-[#fc8019]" src={assets.Help} alt="" />
      ),
      name: "Help",
    },
    {
      icon: (
        <img
          className="h-4.5 hover:text-[#fc8019]"
          src={assets.Account}
          alt=""
        />
      ),
      name: "Sign In",
    },
    {
      icon: (
        <img className="h-5 hover:text-[#fc8019]" src={assets.Cart} alt="" />
      ),
      name: "Cart",
    },
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed z-[10000] duration-500"
        onClick={showSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full md:w-[579px] h-full bg-white absolute duration-500 flex flex-col gap-6 py-8 shadow-md"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="flex flex-col gap-6 w-full md:w-[80%] px-6 lg:px-10 lg:ml-auto">
            <div onClick={showSideMenu} className="flex cursor-pointer">
              <RxCross1 className="text-xl" />
            </div>

            <div>
              <input
                type="text"
                placeholder="Search for area, street name.."
                className="w-full border border-gray-300 py-3 px-4 text-gray-800 focus:outline-none focus:ring focus:ring-gray-100"
              />
            </div>

            <div className="flex items-center gap-3 p-4 border border-gray-300 cursor-pointer group">
              <div>
                <MdOutlineMyLocation className="text-xl text-gray-500 -mt-[19px]" />
              </div>
              <div>
                <p className="text-[15px] font-medium group-hover:text-orange-600">
                  Get current location
                </p>
                <p className="text-[13px] text-gray-500 ">Using GPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="p-3 shadow-lg sticky top-0 z-[50] bg-white">
        <div className="max-w-[1216px] mx-auto flex items-center">
          <div className="w-[49px]">
            <img src={assets.logo1} className="w-full" alt="" />
          </div>
          <div
            onClick={showSideMenu}
            className=" cursor-pointer flex text-[13px] text-[#8b8d97] ml-4 lg:ml-11"
          >
            <div className="border-b-2 border-gray-700 h-6">
              <span className="font-bold text-[#3d4152] text-[13px]">
                Other
              </span>
            </div>
            <span className="ml-3">Udaipur,Rajasthan,India</span>
            <RxCaretDown
              fontSize={25}
              className="inline -mt-1 font-bold text-[#fc8019] "
            />
          </div>
          <nav className="hidden cursor-pointer h-full lg:flex list-none text-[15px] lg:gap-[30px] xl:gap-[46px] ml-auto font-semibold mr-3">
            {Links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex hover:text-[#fc8019] items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                  <sup className="-ml-1 text-[#fc8019]">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Heading;
