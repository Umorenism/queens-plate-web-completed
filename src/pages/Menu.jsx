

import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { HowToOrder } from "../sections/how/HowToOrder";
import ContactUs from "../sections/contact/Contact";

const API_BASE = "https://api.queensplate.store/api/v1";
const STORAGE_BASE = "https://api.queensplate.store/api/v1/storage"; 
const APP_URL = "https://app.queensplate.store/";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemAnim = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };

export const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [allMeals, setAllMeals] = useState([]); 
  const [displayedFoods, setDisplayedFoods] = useState([]); 
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);

  // Helper to format category and meal images
  const getImageUrl = (path) => {
    if (!path) return "https://placehold.co/400x400?text=No+Image";
    if (path.startsWith("http")) return path;
    return `${STORAGE_BASE}/${path}`;
  };

  const handleImageError = (e) => {
    if (e.target.src !== "https://placehold.co/400x400?text=No+Image") {
      e.target.src = "https://placehold.co/400x400?text=No+Image";
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/web-menu`);
      const json = await res.json();

      if (json.success) {
        const rawCats = json.data.categories;
        const meals = json.data.featured_meals;

        // Deduplication Logic
        const uniqueCats = rawCats.filter(
          (cat, index, self) =>
            index === self.findIndex((c) => c.name === cat.name)
        );

        setCategories(uniqueCats);
        setAllMeals(meals);

        if (uniqueCats.length > 0) {
          handleTabClick(uniqueCats[0].name, uniqueCats[0].id, meals);
        }
      }
    } catch (err) {
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (catName, catId, mealsToFilter = allMeals) => {
    setActiveTab(catName);

    const filtered =
      catName === "All"
        ? mealsToFilter
        : mealsToFilter.filter(
            (meal) => String(meal.category_id) === String(catId)
          );

    const formatted = filtered.map((meal) => ({
      ...meal,
      formattedPrice: `₦${Number(meal.price).toLocaleString()}`,
      finalImage: getImageUrl(meal.image),
      isAvailable: String(meal.is_available) === "1",
    }));

    setDisplayedFoods(formatted);
  };

  const handleOrderRedirect = () => {
    window.open(APP_URL, "_blank");
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#f6e6d2] py-14 md:py-20 px-4 md:px-6"
      >
        <div className="max-w-7xl mt-10 md:mt-10 mx-auto text-center">
          <motion.h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Menu Categories
          </motion.h2>
          <motion.p className="text-gray-500 text-xs md:text-sm mt-2 mb-8 md:mb-12">
            Explore our delicious categories (Refresh to sync)
          </motion.p>

          {/* CATEGORY TABS WITH IMAGES */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="flex md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-4 md:gap-10 px-2 md:px-4 mb-10 md:mb-16 scrollbar-hide"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={itemAnim}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTabClick(cat.name, cat.id)}
                className="flex flex-col items-center cursor-pointer group min-w-[72px] md:min-w-[unset]"
              >
                <div
                  className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[28px] overflow-hidden flex items-center justify-center transition-all duration-300 border-4 ${
                    activeTab === cat.name
                      ? "bg-white shadow-lg border-[#A41C2E]"
                      : "bg-white/50 hover:bg-white border-transparent"
                  }`}
                >
                  <img 
                    src={getImageUrl(cat.image)} 
                    alt={cat.name} 
                    className={`w-full h-full object-cover p-1 rounded-2xl md:rounded-[28px] ${activeTab === cat.name ? "" : "grayscale-[40%] opacity-80"}`}
                    onError={handleImageError}
                  />
                </div>
                <span
                  className={`mt-2 font-bold text-xs md:text-sm whitespace-nowrap ${
                    activeTab === cat.name ? "text-[#A41C2E]" : "text-gray-500"
                  }`}
                >
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* MENU GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl animate-pulse h-64"
                  />
                ))
              ) : displayedFoods.length > 0 ? (
                displayedFoods.map((food, index) => (
                  <motion.div
                    key={food.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition flex flex-col"
                  >
                    <div className="rounded-lg md:rounded-xl overflow-hidden bg-gray-100 aspect-square">
                      <motion.img
                        src={food.finalImage}
                        alt={food.name}
                        loading="lazy"
                        className={`w-full h-full object-cover ${
                          !food.isAvailable ? "grayscale opacity-60" : ""
                        }`}
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="text-left mt-2 md:mt-4 text-xs md:text-sm font-bold text-gray-700 line-clamp-2 min-h-[32px] md:min-h-[40px]">
                      {food.name}
                    </h3>
                    <div className="flex justify-between items-center mt-auto pt-2">
                      <span className="text-[#A41C2E] text-xs md:text-sm font-black">
                        {food.formattedPrice}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        onClick={handleOrderRedirect}
                        className="bg-yellow-100 text-yellow-600 p-1.5 md:p-2 rounded-full cursor-pointer"
                      >
                        <FiShoppingCart size={14} />
                      </motion.div>
                    </div>
                    <motion.button
                      whileHover={food.isAvailable ? { scale: 1.02 } : {}}
                      whileTap={food.isAvailable ? { scale: 0.98 } : {}}
                      disabled={!food.isAvailable}
                      onClick={handleOrderRedirect}
                      className={`mt-3 w-full py-2 rounded-full text-xs md:text-sm font-bold transition shadow-sm ${
                        food.isAvailable
                          ? "bg-[#A41C2E] hover:bg-red-800 text-white"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {food.isAvailable ? "Order Now" : "Out of Stock"}
                    </motion.button>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-gray-400 font-medium">
                  No items available in this category yet.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
      <HowToOrder />
      <ContactUs />
    </>
  );
};