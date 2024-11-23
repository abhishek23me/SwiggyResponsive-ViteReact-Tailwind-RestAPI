import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import Category from "./Category";
import Toprestaurant from "./Toprestaurant";
import OnlineDelhivery from "./OnlineDelhivery";
import Card from "./Card";
import Footer from "./Footer";
import { MdOutlineIcecream } from "react-icons/md";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(true); // New state for controlling the visibility of the overlay
  const [categoryData, setCategoryData] = useState([]);
  const [onlineDelhiveryData, setOnlineDelhiveryData] = useState([]);
  const [topRestaurantData, setTopRestaurantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories using environment variable
        const categoryResponse = await fetch(import.meta.env.VITE_API_CATEGORIES_URL);
        const categoryData = await categoryResponse.json();
        setCategoryData(categoryData);

        // Fetch OnlineDelhivery data using environment variable
        const deliveryResponse = await fetch(import.meta.env.VITE_API_ONLINE_DELHIVERY_URL);
        const deliveryData = await deliveryResponse.json();
        setOnlineDelhiveryData(deliveryData);

        // Fetch Toprestaurant data using environment variable
        const restaurantResponse = await fetch(import.meta.env.VITE_API_TOP_RESTAURANT_URL);
        const restaurantData = await restaurantResponse.json();
        setTopRestaurantData(restaurantData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);  // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        setOverlayVisible(false);  // Hide the overlay after 2 seconds
      }, 2000);  // Delay for 2 seconds

      return () => clearTimeout(timeout); // Cleanup timeout on component unmount
    }
  }, [loading]);

  return (
    <div className="relative">
      <Heading />
      {overlayVisible && (
        <div className="fixed inset-0 top-[64px] bg-gray-900 z-50 flex flex-col items-center justify-center text-white">
          <div className="animate-spin">
            <MdOutlineIcecream size={48} className="text-orange-500" />
          </div>
          <p className="mt-4 text-lg font-medium">Looking for great food near you...</p>
        </div>
      )}
      <Category categories={categoryData} />
      <Toprestaurant data={topRestaurantData} />
      <OnlineDelhivery data={onlineDelhiveryData} />
      <Card />
      <Footer />
    </div>
  );
};

export default Homepage;
