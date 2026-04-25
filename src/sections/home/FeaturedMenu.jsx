




import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const API_BASE = "https://api.queensplate.store/api/v1";
const STORAGE_BASE = "https://api.queensplate.store/api/v1/storage";
const APP_URL = "https://app.queensplate.store/";

export const FeaturedMenu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Unified Redirect Function
  const handleOrderRedirect = () => {
    window.open(APP_URL, "_blank");
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE}/web-menu`);
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();

        if (data.success && data.data?.featured_meals?.length > 0) {
          const formatted = data.data.featured_meals.map((meal) => {
            // --- IMAGE FIX LOGIC ---
            let finalImageUrl = meal.image;
            if (meal.image) {
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
              is_available: String(meal.is_available) === "1", 
            };
          });

          setFoods(formatted);
        } else {
          setError("No featured meals available right now.");
        }
      } catch (err) {
        console.error("Failed to fetch featured menu:", err);
        setError("Unable to load menu. Please check your internet connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = "https://placehold.co/400x400?text=Image+Unavailable";
  };

  return (
    <section className="bg-[#f6e6d2] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#A41C2E] text-sm font-bold mb-2 uppercase tracking-widest">Popular Dishes</p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-800">Featured Menu</h2>
        <p className="text-gray-500 text-sm mt-2 mb-12">
          A taste of what's waiting for you on the app
        </p>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/50 rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 py-12 font-medium">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {foods.map((food) => (
              <div
                key={food.id}
                className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video mb-4">
                  <img
                    src={food.image}
                    alt={food.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      !food.is_available ? "grayscale opacity-60" : ""
                    }`}
                    onError={handleImageError}
                  />
                </div>

                {/* Name */}
                <h3 className="text-left text-sm font-bold text-gray-700 line-clamp-2 min-h-[2.5rem]">
                  {food.name}
                </h3>

                {/* Price + Cart */}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-[#A41C2E] font-black text-lg">{food.price}</span>
                  <div 
                    onClick={handleOrderRedirect}
                    className="bg-yellow-100 text-yellow-600 p-2.5 rounded-full cursor-pointer hover:bg-yellow-200 hover:scale-110 transition-all shadow-sm"
                  >
                    <FiShoppingCart size={18} />
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={handleOrderRedirect}
                  className={`mt-4 w-full py-3 rounded-full text-sm font-black transition-all active:scale-95 shadow-md ${
                    food.is_available
                      ? "bg-[#A41C2E] hover:bg-red-800 text-white shadow-red-900/10"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!food.is_available}
                >
                  {food.is_available ? "Order Now" : "Out of Stock"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};