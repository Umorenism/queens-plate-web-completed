
// import React, { useState } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for smoother transitions
// import { HowToOrder } from "../sections/how/HowToOrder";
// import ContactUs from "../sections/contact/Contact";
// import { UtensilsCrossed, Soup, Flame, Croissant, IceCream, GlassWater } from "lucide-react";

// // 1. Added 'category' to each food item to match the category names
// const foods = [
//   {
//     name: "Nigerian Jellof rice with fried...",
//     price: "₦5,500",
//     category: "Rice Dishes",
//     image: "https://i.pinimg.com/1200x/bf/1b/ef/bf1befc7f387a1145280f5371619a07e.jpg",
//   },
//   {
//     name: "Okora soup with goat meat...",
//     price: "₦8,000",
//     category: "Soups",
//     image: "https://i.pinimg.com/736x/5d/4e/63/5d4e6367dba28e1dab3270cda12badcf.jpg",
//   },
//   {
//     name: "Grilled Chicken Suya",
//     price: "₦4,500",
//     category: "Grills",
//     image: "https://i.pinimg.com/736x/5d/4e/63/5d4e6367dba28e1dab3270cda12badcf.jpg",
//   },
// ];

// const categories = [
//   { id: 1, name: "Rice Dishes", icon: <UtensilsCrossed size={28} /> },
//   { id: 2, name: "Soups", icon: <Soup size={28} /> },
//   { id: 3, name: "Grills", icon: <Flame size={28} /> },
//   { id: 4, name: "Swallow", icon: <Croissant size={28} /> },
//   { id: 5, name: "Desert", icon: <IceCream size={28} /> },
//   { id: 6, name: "Drink", icon: <GlassWater size={28} /> },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.1 } }
// };

// const itemAnim = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1 }
// };

// export const Menu = () => {
//   // 2. Set active state to the category name (default: "Rice Dishes")
//   const [activeTab, setActiveTab] = useState("Rice Dishes");

//   // 3. Filter the foods based on the active category
//   const filteredMenu = foods.filter(food => food.category === activeTab);

//   return (
//     <>
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="bg-[#f6e6d2] py-20 px-6"
//       >
//         <div className="max-w-7xl mt-10 mx-auto text-center">
//           <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Menu Categories
//           </motion.h2>

//           <motion.p className="text-gray-500 text-sm mt-2 mb-12">
//             A taste of what's waiting for you on the app
//           </motion.p>

//           {/* Category Tabs */}
//           <motion.div 
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             className="max-w-[1047.13px] mx-auto flex flex-wrap justify-center gap-6 md:gap-10 px-4 mb-16"
//           >
//             {categories.map((cat) => (
//               <motion.div
//                 key={cat.id}
//                 variants={itemAnim}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveTab(cat.name)} // Set by name
//                 className="flex flex-col items-center cursor-pointer group"
//               >
//                 <div className={`
//                   w-20 h-20 md:w-24 md:h-24 
//                   rounded-[28px] flex items-center justify-center transition-all duration-300
//                   ${activeTab === cat.name ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white'}
//                 `}>
//                   <div className={activeTab === cat.name ? 'text-[#A41C2E]' : 'text-gray-600'}>
//                     {cat.icon}
//                   </div>
//                 </div>
//                 <span className={`mt-3 font-semibold text-sm transition-colors ${activeTab === cat.name ? 'text-[#A41C2E]' : 'text-gray-500'}`}>
//                   {cat.name}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Menu Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <AnimatePresence mode="wait">
//               {filteredMenu.length > 0 ? (
//                 filteredMenu.map((food, index) => (
//                   <motion.div
//                     key={`${activeTab}-${index}`} // Key changes per tab to trigger re-animation
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     exit={{ y: -20, opacity: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.05 }}
//                     whileHover={{ y: -8 }}
//                     className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300"
//                   >
//                     <div className="rounded-xl overflow-hidden">
//                       <motion.img
//                         src={food.image}
//                         alt={food.name}
//                         whileHover={{ scale: 1.05 }}
//                         className="w-full h-40 object-cover"
//                       />
//                     </div>
//                     <h3 className="text-left mt-4 text-sm font-medium text-gray-700 h-10">
//                       {food.name}
//                     </h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-red-600 font-semibold">{food.price}</span>
//                       <motion.div
//                         whileHover={{ scale: 1.2, rotate: 10 }}
//                         className="bg-yellow-100 text-yellow-500 p-2 rounded-full"
//                       >
//                         <FiShoppingCart size={16} />
//                       </motion.div>
//                     </div>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="mt-4 bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-full text-sm font-medium transition"
//                     >
//                       Order Now
//                     </motion.button>
//                   </motion.div>
//                 ))
//               ) : (
//                 <div className="col-span-full py-20 text-gray-400">
//                   No items available in this category.
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </motion.section>
//       <HowToOrder/>
//       <ContactUs/>
//     </>
//   );
// };





// import React, { useEffect, useState } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { HowToOrder } from "../sections/how/HowToOrder";
// import ContactUs from "../sections/contact/Contact";
// import {
//   UtensilsCrossed,
//   Soup,
//   Flame,
//   Croissant,
//   IceCream,
//   GlassWater,
// } from "lucide-react";

// /**
//  * API CONFIG
//  */
// const API_BASE =
//   "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";

// const STORAGE_BASE =
//   "https://queensplate-main-jw6so1.free.laravel.cloud/storage/";

// /**
//  * CATEGORY ICON MAPPING
//  * keeps your UI unchanged
//  */
// const categoryIcons = {
//   "Rice Dishes": <UtensilsCrossed size={28} />,
//   Rice: <UtensilsCrossed size={28} />,
//   Soups: <Soup size={28} />,
//   Drinks: <GlassWater size={28} />,
//   Drink: <GlassWater size={28} />,
//   Sides: <Croissant size={28} />,
//   Desert: <IceCream size={28} />,
//   Grills: <Flame size={28} />,
// };

// const container = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const itemAnim = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1 },
// };

// export const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [foods, setFoods] = useState([]);
//   const [activeTab, setActiveTab] = useState("");
//   const [loading, setLoading] = useState(true);

//   /**
//    * FETCH MENU DATA
//    */
//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const res = await fetch(`${API_BASE}/web-menu`);
//         const data = await res.json();

//         if (data.success) {
//           /**
//            * REMOVE DUPLICATE CATEGORY NAMES
//            */
//           const uniqueCategories = [
//             ...new Map(
//               data.data.categories.map((cat) => [cat.name, cat])
//             ).values(),
//           ];

//           /**
//            * FORMAT CATEGORIES FOR UI
//            */
//           const formattedCategories = uniqueCategories.map((cat) => ({
//             id: cat.id,
//             name: cat.name,
//             icon:
//               categoryIcons[cat.name] ||
//               <UtensilsCrossed size={28} />,
//           }));

//           setCategories(formattedCategories);

//           /**
//            * SET DEFAULT ACTIVE TAB
//            */
//           if (formattedCategories.length > 0) {
//             setActiveTab(formattedCategories[0].name);
//           }

//           /**
//            * FORMAT FEATURED MEALS
//            */
//           const formattedMeals = data.data.featured_meals.map(
//             (meal) => {
//               const categoryMatch =
//                 uniqueCategories.find(
//                   (cat) => cat.id === meal.category_id
//                 );

//               return {
//                 name: meal.name,
//                 price: `₦${Number(meal.price).toLocaleString()}`,
//                 category: categoryMatch?.name || "",
//                 image: STORAGE_BASE + meal.image,
//               };
//             }
//           );

//           setFoods(formattedMeals);
//         }
//       } catch (err) {
//         console.log("Menu fetch failed:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, []);

//   /**
//    * FILTER MENU BASED ON CATEGORY
//    */
//   const filteredMenu = foods.filter(
//     (food) => food.category === activeTab
//   );

//   return (
//     <>
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="bg-[#f6e6d2] py-20 px-6"
//       >
//         <div className="max-w-7xl mt-10 mx-auto text-center">
//           <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Menu Categories
//           </motion.h2>

//           <motion.p className="text-gray-500 text-sm mt-2 mb-12">
//             A taste of what's waiting for you on the app
//           </motion.p>

//           {/* CATEGORY TABS */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             className="max-w-[1047.13px] mx-auto flex flex-wrap justify-center gap-6 md:gap-10 px-4 mb-16"
//           >
//             {categories.map((cat) => (
//               <motion.div
//                 key={cat.id}
//                 variants={itemAnim}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveTab(cat.name)}
//                 className="flex flex-col items-center cursor-pointer group"
//               >
//                 <div
//                   className={`w-20 h-20 md:w-24 md:h-24 rounded-[28px] flex items-center justify-center transition-all duration-300
//                   ${
//                     activeTab === cat.name
//                       ? "bg-white shadow-lg"
//                       : "bg-white/50 hover:bg-white"
//                   }`}
//                 >
//                   <div
//                     className={
//                       activeTab === cat.name
//                         ? "text-[#A41C2E]"
//                         : "text-gray-600"
//                     }
//                   >
//                     {cat.icon}
//                   </div>
//                 </div>

//                 <span
//                   className={`mt-3 font-semibold text-sm transition-colors ${
//                     activeTab === cat.name
//                       ? "text-[#A41C2E]"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   {cat.name}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* MENU GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <AnimatePresence mode="wait">
//               {loading ? (
//                 <div className="col-span-full py-20 text-gray-400">
//                   Loading meals...
//                 </div>
//               ) : filteredMenu.length > 0 ? (
//                 filteredMenu.map((food, index) => (
//                   <motion.div
//                     key={`${activeTab}-${index}`}
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     exit={{ y: -20, opacity: 0 }}
//                     transition={{
//                       duration: 0.3,
//                       delay: index * 0.05,
//                     }}
//                     whileHover={{ y: -8 }}
//                     className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300"
//                   >
//                     <div className="rounded-xl overflow-hidden">
//                       <motion.img
//                         src={food.image}
//                         alt={food.name}
//                         whileHover={{ scale: 1.05 }}
//                         className="w-full h-40 object-cover"
//                       />
//                     </div>

//                     <h3 className="text-left mt-4 text-sm font-medium text-gray-700 h-10">
//                       {food.name}
//                     </h3>

//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-red-600 font-semibold">
//                         {food.price}
//                       </span>

//                       <motion.div
//                         whileHover={{ scale: 1.2, rotate: 10 }}
//                         className="bg-yellow-100 text-yellow-500 p-2 rounded-full"
//                       >
//                         <FiShoppingCart size={16} />
//                       </motion.div>
//                     </div>

//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="mt-4 bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-full text-sm font-medium transition"
//                     >
//                       Order Now
//                     </motion.button>
//                   </motion.div>
//                 ))
//               ) : (
//                 <div className="col-span-full py-20 text-gray-400">
//                   No items available in this category.
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </motion.section>

//       <HowToOrder />
//       <ContactUs />
//     </>
//   );
// };








// import React, { useEffect, useState } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { HowToOrder } from "../sections/how/HowToOrder";
// import ContactUs from "../sections/contact/Contact";
// import {
//   UtensilsCrossed,
//   Soup,
//   Flame,
//   Croissant,
//   IceCream,
//   GlassWater,
// } from "lucide-react";

// const API_BASE = "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";
// const STORAGE_BASE = "https://queensplate-main-jw6so1.free.laravel.cloud/storage/";

// const categoryIcons = {
//   "Rice Dishes": <UtensilsCrossed size={28} />,
//   Rice: <UtensilsCrossed size={28} />,
//   Soups: <Soup size={28} />,
//   Drinks: <GlassWater size={28} />,
//   Drink: <GlassWater size={28} />,
//   Sides: <Croissant size={28} />,
//   Desert: <IceCream size={28} />,
//   Grills: <Flame size={28} />,
// };

// const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
// const itemAnim = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };

// export const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [foods, setFoods] = useState([]);           // Current category meals
//   const [activeTab, setActiveTab] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [menuLoading, setMenuLoading] = useState(false); // Separate loading for tab switch
// const [cache, setCache] = useState({});
//   // Fetch categories + initial data
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`${API_BASE}/web-menu`);
//         const data = await res.json();

//         if (data.success) {
//           // Unique categories
//           const uniqueCategories = [
//             ...new Map(data.data.categories.map((cat) => [cat.name, cat])).values(),
//           ];

//           const formattedCategories = uniqueCategories.map((cat) => ({
//             id: cat.id,
//             name: cat.name,
//             icon: categoryIcons[cat.name] || <UtensilsCrossed size={28} />,
//           }));

//           setCategories(formattedCategories);

//           if (formattedCategories.length > 0) {
//             const firstCategory = formattedCategories[0];
//             setActiveTab(firstCategory.name);
//             fetchCategoryMeals(firstCategory.id); // Load first category
//           }
//         }
//       } catch (err) {
//         console.error("Initial menu fetch failed:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInitialData();
//   }, []);

//   // Fetch meals when active tab changes
//   const fetchCategoryMeals = async (categoryId) => {
//   // 1. Check if we already have this data
//   if (cache[categoryId]) {
//     setFoods(cache[categoryId]);
//     return;
//   }

//   try {
//     setMenuLoading(true);
//     const res = await fetch(`${API_BASE}/web-menu/${categoryId}`, {
//       headers: { 'Accept': 'application/json' },
//     });
//     const data = await res.json();

//     if (data.success && data.data) {
//       const mealsArray = Array.isArray(data.data) ? data.data : [data.data];
//       const formattedMeals = mealsArray.map((meal) => ({
//         id: meal.id,
//         name: meal.name,
//         price: `₦${Number(meal.price).toLocaleString()}`,
//         image: `${STORAGE_BASE}${meal.image}`,
//         is_available: meal.is_available === 1,
//       }));

//       // 2. Save to cache and state
//       setCache(prev => ({ ...prev, [categoryId]: formattedMeals }));
//       setFoods(formattedMeals);
//     }
//   } catch (err) {
//     console.error(err);
//   } finally {
//     setMenuLoading(false);
//   }
// };
//   // Handle tab click
//  const handleTabClick = (categoryName, categoryId) => {
//   if (activeTab === categoryName) return; // Prevent clicking same tab
//   setActiveTab(categoryName); // Immediate UI update
//   fetchCategoryMeals(categoryId);
// };

//   // Safe image error handler (no external placeholder)
//   const handleImageError = (e) => {
//     e.target.onerror = null;
//     e.target.src = "";
//     e.target.style.backgroundColor = "#f3f4f6";
//     e.target.style.color = "#9ca3af";
//     e.target.style.display = "flex";
//     e.target.style.alignItems = "center";
//     e.target.style.justifyContent = "center";
//     e.target.style.fontSize = "13px";
//     e.target.textContent = "Image unavailable";
//   };

//   return (
//   <>
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#f6e6d2] py-14 md:py-20 px-4 md:px-6"
//     >
//       <div className="max-w-7xl mt-6 md:mt-10 mx-auto text-center">

//         {/* TITLE */}
//         <motion.h2 className="text-2xl md:text-4xl font-bold text-gray-800">
//           Menu Categories
//         </motion.h2>

//         <motion.p className="text-gray-500 text-xs md:text-sm mt-2 mb-8 md:mb-12">
//           A taste of what's waiting for you on the app
//         </motion.p>


//         {/* CATEGORY TABS */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           className="
//           flex md:flex-wrap
//           overflow-x-auto md:overflow-visible
//           justify-start md:justify-center
//           gap-4 md:gap-10
//           px-2 md:px-4
//           mb-10 md:mb-16
//           scrollbar-hide
//           "
//         >
//           {categories.map((cat) => (
//             <motion.div
//               key={cat.id}
//               variants={itemAnim}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handleTabClick(cat.name, cat.id)}
//               className="
//               flex flex-col items-center
//               cursor-pointer
//               group
//               min-w-[72px]
//               md:min-w-[unset]
//               "
//             >
//               <div
//                 className={`
//                 w-16 h-16 md:w-24 md:h-24
//                 rounded-2xl md:rounded-[28px]
//                 flex items-center justify-center
//                 transition-all duration-300
//                 ${
//                   activeTab === cat.name
//                     ? "bg-white shadow-lg"
//                     : "bg-white/50 hover:bg-white"
//                 }
//                 `}
//               >
//                 <div
//                   className={
//                     activeTab === cat.name
//                       ? "text-[#A41C2E]"
//                       : "text-gray-600"
//                   }
//                 >
//                   {cat.icon}
//                 </div>
//               </div>

//               <span
//                 className={`
//                 mt-2 md:mt-2
//                 font-semibold
//                 text-xs md:text-sm
//                 whitespace-nowrap
//                 ${
//                   activeTab === cat.name
//                     ? "text-[#A41C2E]"
//                     : "text-gray-500"
//                 }
//                 `}
//               >
//                 {cat.name}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>


//         {/* MENU GRID */}
//         <div
//           className="
//           grid
//           grid-cols-2
//           sm:grid-cols-2
//           md:grid-cols-3
//           lg:grid-cols-4
//           gap-4 md:gap-8
//           "
//         >
//           <AnimatePresence mode="wait">
//             {loading || menuLoading ? (
//               <div className="col-span-full py-20 text-gray-400">
//                 Loading meals...
//               </div>
//             ) : foods.length > 0 ? (
//               foods.map((food, index) => (
//                 <motion.div
//                   key={food.id || index}
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -20, opacity: 0 }}
//                   transition={{
//                     duration: 0.3,
//                     delay: index * 0.05,
//                   }}
//                   whileHover={{ y: -8 }}
//                   className="
//                   bg-white
//                   rounded-xl md:rounded-2xl
//                   p-3 md:p-4
//                   shadow-sm
//                   hover:shadow-md
//                   transition
//                   "
//                 >
//                   {/* IMAGE */}
//                   <div className="rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
//                     <motion.img
//                       src={food.image}
//                       alt={food.name}
//                       whileHover={{ scale: 1.05 }}
//                       className="
//                       w-full
//                       h-28 md:h-40
//                       object-cover
//                       "
//                       onError={handleImageError}
//                     />
//                   </div>


//                   {/* NAME */}
//                   <h3
//                     className="
//                     text-left
//                     mt-2 md:mt-4
//                     text-xs md:text-sm
//                     font-medium
//                     text-gray-700
//                     line-clamp-2
//                     min-h-[32px]
//                     md:min-h-[40px]
//                     "
//                   >
//                     {food.name}
//                   </h3>


//                   {/* PRICE + CART */}
//                   <div className="flex justify-between items-center mt-1 md:mt-2">
//                     <span className="text-red-600 text-xs md:text-sm font-semibold">
//                       {food.price}
//                     </span>

//                     <motion.div
//                       whileHover={{ scale: 1.2, rotate: 10 }}
//                       className="
//                       bg-yellow-100
//                       text-yellow-500
//                       p-1.5 md:p-2
//                       rounded-full
//                       cursor-pointer
//                       "
//                     >
//                       <FiShoppingCart size={14} />
//                     </motion.div>
//                   </div>


//                   {/* ORDER BUTTON */}
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="
//                     mt-2 md:mt-4
//                     bg-red-600
//                     hover:bg-red-700
//                     text-white
//                     w-full
//                     py-1.5 md:py-2
//                     rounded-full
//                     text-xs md:text-sm
//                     font-medium
//                     transition
//                     "
//                   >
//                     Order Now
//                   </motion.button>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="col-span-full py-20 text-gray-400">
//                 No items available in this category yet.
//               </div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.section>

//     <HowToOrder />
//     <ContactUs />
//   </>
// );
// };







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
  
  // CACHE: Stores fetched meals by categoryId to prevent repeated API calls
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
    // 1. Check Cache first for instant loading
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
        const mealsArray = Array.isArray(data.data) ? data.data : [data.data];
        const formattedMeals = mealsArray.map((meal) => ({
          id: meal.id,
          name: meal.name,
          price: `₦${Number(meal.price).toLocaleString()}`,
          image: `${STORAGE_BASE}${meal.image}`,
          is_available: meal.is_available === 1,
        }));

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
    e.target.onerror = null;
    e.target.src = "https://placehold.co/400x400?text=No+Image";
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
        <div className="max-w-7xl mt-6 md:mt-10 mx-auto text-center">
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