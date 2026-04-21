

import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { HowToOrder } from "../sections/how/HowToOrder";
import ContactUs from "../sections/contact/Contact";
import {
  UtensilsCrossed,
  Soup,
  Flame,
  Croissant,
  IceCream,
  GlassWater,
} from "lucide-react";

const API_BASE = "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";
const STORAGE_BASE = "https://queensplate-main-jw6so1.free.laravel.cloud/storage/";

const categoryIcons = {
  "Rice Dishes": <UtensilsCrossed size={28} />,
  Rice: <UtensilsCrossed size={28} />,
  Soups: <Soup size={28} />,
  Drinks: <GlassWater size={28} />,
  Drink: <GlassWater size={28} />,
  Sides: <Croissant size={28} />,
  Desert: <IceCream size={28} />,
  Grills: <Flame size={28} />,
};

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemAnim = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };

export const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(false);
  
  // CACHE: Stores fetched meals by categoryId
  const [menuCache, setMenuCache] = useState({});

  // Fetch categories + initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/web-menu`);
        const data = await res.json();

        if (data.success) {
          const uniqueCategories = [
            ...new Map(data.data.categories.map((cat) => [cat.name, cat])).values(),
          ];

          const formattedCategories = uniqueCategories.map((cat) => ({
            id: cat.id,
            name: cat.name,
            icon: categoryIcons[cat.name] || <UtensilsCrossed size={28} />,
          }));

          setCategories(formattedCategories);

          if (formattedCategories.length > 0) {
            const firstCategory = formattedCategories[0];
            setActiveTab(firstCategory.name);
            fetchCategoryMeals(firstCategory.id); 
          }
        }
      } catch (err) {
        console.error("Initial menu fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const fetchCategoryMeals = async (categoryId) => {
    // 1. Check Cache first
    if (menuCache[categoryId]) {
      setFoods(menuCache[categoryId]);
      return;
    }

    try {
      setMenuLoading(true);
      const res = await fetch(`${API_BASE}/web-menu/${categoryId}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        setFoods([]);
        return;
      }

      const data = await res.json();

      if (data.success && data.data) {
        // Handle both single object return and array return from API
        const mealsArray = Array.isArray(data.data) ? data.data : [data.data];
        
        const formattedMeals = mealsArray.map((meal) => {
          // --- IMAGE FIX LOGIC ---
          let finalImageUrl = meal.image;
          if (meal.image) {
            // If the URL is already absolute (Cloudinary), use it.
            // Otherwise, prepend the storage base.
            if (!meal.image.startsWith("http")) {
              finalImageUrl = `${STORAGE_BASE}${meal.image}`;
            }
          } else {
            finalImageUrl = "https://placehold.co/400x400?text=No+Image";
          }

          return {
            id: meal.id,
            name: meal.name,
            price: `₦${Number(meal.price).toLocaleString()}`,
            image: finalImageUrl,
            is_available: meal.is_available === 1,
          };
        });

        // 2. Save to Cache
        setMenuCache(prev => ({ ...prev, [categoryId]: formattedMeals }));
        setFoods(formattedMeals);
      } else {
        setFoods([]);
      }
    } catch (err) {
      console.error(`Failed to fetch meals:`, err);
      setFoods([]);
    } finally {
      setMenuLoading(false);
    }
  };

  const handleTabClick = (categoryName, categoryId) => {
    if (activeTab === categoryName) return;
    setActiveTab(categoryName);
    fetchCategoryMeals(categoryId);
  };

  const handleImageError = (e) => {
    // Prevent infinite loop if placeholder fails
    if (e.target.src !== "https://placehold.co/400x400?text=No+Image") {
      e.target.src = "https://placehold.co/400x400?text=No+Image";
    }
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
            A taste of what's waiting for you on the app
          </motion.p>

          {/* CATEGORY TABS */}
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
                  className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[28px] flex items-center justify-center transition-all duration-300 ${
                    activeTab === cat.name ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white"
                  }`}
                >
                  <div className={activeTab === cat.name ? "text-[#A41C2E]" : "text-gray-600"}>
                    {cat.icon}
                  </div>
                </div>
                <span className={`mt-2 font-semibold text-xs md:text-sm whitespace-nowrap ${
                  activeTab === cat.name ? "text-[#A41C2E]" : "text-gray-500"
                }`}>
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* MENU GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            <AnimatePresence mode="wait">
              {menuLoading ? (
                /* SKELETON LOADERS */
                [...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl animate-pulse">
                    <div className="w-full h-28 md:h-40 bg-gray-200 rounded-lg md:rounded-xl mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                    <div className="h-8 bg-gray-200 rounded-full w-full" />
                  </div>
                ))
              ) : foods.length > 0 ? (
                foods.map((food, index) => (
                  <motion.div
                    key={food.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
                      <motion.img
                        src={food.image}
                        alt={food.name}
                        loading="lazy"
                        className="w-full h-28 md:h-40 object-cover"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="text-left mt-2 md:mt-4 text-xs md:text-sm font-medium text-gray-700 line-clamp-2 min-h-[32px] md:min-h-[40px]">
                      {food.name}
                    </h3>
                    <div className="flex justify-between items-center mt-1 md:mt-2">
                      <span className="text-red-600 text-xs md:text-sm font-semibold">{food.price}</span>
                      <motion.div whileHover={{ scale: 1.1 }} className="bg-yellow-100 text-yellow-500 p-1.5 md:p-2 rounded-full cursor-pointer">
                        <FiShoppingCart size={14} />
                      </motion.div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-2 md:mt-4 bg-red-600 hover:bg-red-700 text-white w-full py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition"
                    >
                      Order Now
                    </motion.button>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-gray-400">
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