import React, { useState } from 'react';

const cities = [
    "Best Restaurants in Bangalore",
    "Best Restaurants in Pune",
    "Best Restaurants in Mumbai",
    "Best Restaurants in Delhi",
    "Best Restaurants in Hyderabad",
    "Best Restaurants in Kolkata",
    "Best Restaurants in Chennai",
    "Best Restaurants in Chandigarh",
    "Best Restaurants in Ahmedabad",
    "Best Restaurants in Jaipur",
    "Best Restaurants in Nagpur",
    "Best Restaurants in Bhubaneswar",
    "Best Restaurants in Kochi",
    "Best Restaurants in Surat",
    "Best Restaurants in Dehradun",
    "Best Restaurants in Ludhiana",
    "Best Restaurants in Patna",
    "Best Restaurants in Mangaluru",
    "Best Restaurants in Bhopal",
    "Best Restaurants in Gurgaon",
    "Best Restaurants in Coimbatore",
    "Best Restaurants in Agra",
    "Best Restaurants in Noida",
    "Best Restaurants in Vijayawada",
    "Best Restaurants in Guwahati",
    "Best Restaurants in Mysore",
    "Best Restaurants in Pondicherry",
    "Best Restaurants in Thiruvananthapuram",
    "Best Restaurants in Ranchi",
    "Best Restaurants in Vizag",
    "Best Restaurants in Udaipur",
    "Best Restaurants in Vadodara"
];

const cuisines = [
    "Best Cuisines Near Me",
    "Chinese Restaurant Near Me",
    "South Indian Restaurant Near Me",
    "Indian Restaurant Near Me",
    "Kerala Restaurant Near Me",
    "Korean Restaurant Near Me",
    "North Indian Restaurant Near Me",
    "Seafood Restaurant Near Me",
    "Bengali Restaurant Near Me",
    "Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me"
];

const exploreItems = [
    "Explore Restaurants Near Me",
    "Explore Top Rated Restaurants Near Me"
];

const Card = () => {
    const [visibleCities, setVisibleCities] = useState(11); // Number of cities to show initially
    const [showAllCities, setShowAllCities] = useState(false);

    const [visibleCuisines, setVisibleCuisines] = useState(11); // Number of cuisines to show initially
    const [showAllCuisines, setShowAllCuisines] = useState(false);

    const handleShowMoreCities = () => {
        setShowAllCities(!showAllCities);
        setVisibleCities(showAllCities ? 11 : cities.length);
    };

    const handleShowMoreCuisines = () => {
        setShowAllCuisines(!showAllCuisines);
        setVisibleCuisines(showAllCuisines ? 11 : cuisines.length);
    };

    return (
        <div className='max-w-[1260px] mb-20 mx-auto'>
            <span className='font-bold text-xl mt-12 block px-4'>Best Places to Eat Across Cities</span>
            <div className='grid text-sm md:text-md lg:text-[16px] gap-4 px-4 mt-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {cities.slice(0, visibleCities).map((city, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-center w-full h-[60px] py-4 px-4 rounded-xl border border-gray-300 font-semibold text-center'
                    >
                        <span className='max-w-full'>{city}</span>
                    </div>
                ))}
                {cities.length > 11 && (
                    <div
                        onClick={handleShowMoreCities}
                        className={`flex ${showAllCities ? "hidden" : ""} items-center justify-center w-full h-[60px] py-4 rounded-xl border border-gray-300 font-semibold text-center cursor-pointer`}
                    >
                        <span>{showAllCities ? "Show Less" : "Show More"}</span>
                    </div>
                )}
            </div>


            <span className='font-bold text-xl mt-12 px-4 block'>Best Cuisines Near You</span>
            <div className='grid text-sm md:text-md lg:text-[16px] gap-4 px-4 mt-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {cuisines.slice(0, visibleCuisines).map((cuisine, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-center w-full h-[60px] py-4 px-4 rounded-xl border border-gray-300 font-semibold text-center'
                    >
                        <span>{cuisine}</span>
                    </div>
                ))}
                {cuisines.length > 11 && (
                    <div
                        onClick={handleShowMoreCuisines}
                        className={`flex ${showAllCuisines ? "hidden" : ""} items-center justify-center w-full h-[60px] py-4 rounded-xl border border-gray-300 font-semibold text-center cursor-pointer`}
                    >
                        <span>{showAllCuisines ? "Show Less" : "Show More"}</span>
                    </div>
                )}
            </div>

            <span className='font-bold text-xl mt-12 block px-4'>Explore Every Restaurant Near Me</span>
            <div className='grid text-sm md:text-md lg:text-[16px] gap-4 px-4 mt-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {exploreItems.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-center w-full h-[60px] py-4 px-4 rounded-xl border border-gray-300 font-semibold text-center'
                    >
                        <span>{item}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Card;
