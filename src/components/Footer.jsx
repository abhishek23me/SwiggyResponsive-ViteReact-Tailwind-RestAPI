import React, { useState } from "react";
import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";
import { assets } from "../../src/assets/assets";

const Footer = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="bg-gray-100 pb-10">
            {/* Promotional Section */}
            <div className="max-w-[1060px] flex flex-col border-t-2 border-black mx-auto">
                <div className="flex flex-col md:flex-row py-9 items-center mx-auto px-2">
                    <span className="font-bold text-[13px] md:text-lg lg:text-2xl">
                        For a better experience, download the Swiggy app now
                    </span>
                    <div className="flex gap-4 md:ml-4 mt-4 md:mt-0">
                        <img
                            className=" w-[120px] h-[40px] md:w-[130px] md:h-[50px] xl:w-[180px] xl:h-[60px] cursor-pointer"
                            src={assets.playstore}
                            alt="Play Store"
                        />
                        <img
                            className=" w-[120px] h-[40px] md:w-[130px] md:h-[50px] xl:w-[180px] xl:h-[60px] cursor-pointer"
                            src={assets.appstore}
                            alt="App Store"
                        />
                    </div>
                </div>
            </div>

            <footer className="bg-gray-100 mt-8">
                {/* Main Footer Section */}
                <div className="max-w-[1000px] mx-4 lg:mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
                    {/* Logo Section */}
                    
                    <div className="flex flex-col lg:ml-0 w-[200px]">
                        <img src={assets.mainlogo} alt="Logo" className="w-40 mb-4" />
                        <p className="text-gray-500 text-sm font-bold">
                            &copy; 2024 Swiggy Limited
                        </p>
                    </div>

                    {/* Company Section */}
                    <div className="flex w-[150px] md:w-[160px] flex-col ml-6 mt-2 md:mt-0 lg:ml-20">
                        <h4 className="font-bold mb-2">Company</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>About Us</li>
                            <li>Swiggy Corporate</li>
                            <li>Careers</li>
                            <li>Team</li>
                            <li>Swiggy One</li>
                            <li>Swiggy Instamart</li>
                            <li>Swiggy Dineout</li>
                            <li>Swiggy Genie</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="ml-0 md:ml-6 lg:ml-14 md:mt-0 -mt-40 w-[160px]">
                        <div>
                            <h4 className="font-bold mb-2">Contact us</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Help & Support</li>
                                <li>Partner with us</li>
                                <li>Ride with us</li>
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-14">
                            <h4 className="font-bold mb-2">Legal</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy</li>
                                <li>Privacy Policy</li>
                                <li>Investor Relations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Available In Section */}
                    <div className="ml-6 mt-6 md:mt-0">
                        <h4 className="font-bold mb-2">Available in:</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>Bangalore</li>
                            <li>Gurgaon</li>
                            <li>Hyderabad</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Pune</li>
                            <div
                                onClick={toggleDropdown}
                                className="border border-gray-600 rounded-md flex items-center text-gray-600 cursor-pointer w-[100px] px-2"
                            >
                                <span className="text-[12px] py-1">619 cities</span>
                                <svg
                                    className="w-4 h-4 ml-auto font-bold"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                                    />
                                </svg>
                            </div>
                        </ul>
                    </div>

                    {/* Life at Swiggy Section */}
                    <div>
                        <div>
                            <h4 className="font-bold mb-2 -mt-[90px] md:mt-0">Life at Swiggy</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Explore with Swiggy</li>
                                <li>Swiggy News</li>
                                <li>Snackables</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center mt-14">
                            <h4 className="font-bold mb-2">Social Links</h4>
                            <div className="flex gap-2">
                                <FaLinkedin className="text-gray-600 text-xl" />
                                <FaInstagram className="text-gray-600 text-xl" />
                                <FaFacebook className="text-gray-600 text-xl" />
                                <FaPinterest className="text-gray-600 text-xl" />
                                <FaTwitter className="text-gray-600 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
