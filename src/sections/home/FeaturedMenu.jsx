


import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const API_BASE = "https://api.queensplate.store/api/v1";
const STORAGE_BASE = "https://api.queensplate.store/api/v1/storage";

export const FeaturedMenu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
              // If it's a Cloudinary/External link, use as is. 
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
    // Fallback to a cleaner placeholder image
    e.target.src = "https://placehold.co/400x400?text=Image+Unavailable";
  };

  return (
    <section className="bg-[#f6e6d2] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-red-500 text-sm font-medium mb-2">Popular Dishes</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Menu</h2>
        <p className="text-gray-500 text-sm mt-2 mb-12">
          A taste of what's waiting for you on the app
        </p>

        {loading ? (
          <p className="text-gray-400 py-12">Loading featured menu...</p>
        ) : error ? (
          <p className="text-red-500 py-12">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {foods.map((food) => (
              <div
                key={food.id}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300"
              >
                {/* Image Container */}
                <div className="rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-40 object-cover"
                    onError={handleImageError}
                  />
                </div>

                {/* Name */}
                <h3 className="text-left mt-4 text-sm font-medium text-gray-700 line-clamp-2 min-h-[2.5rem]">
                  {food.name}
                </h3>

                {/* Price + Cart */}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-red-600 font-semibold">{food.price}</span>
                  <div className="bg-yellow-100 text-yellow-500 p-2 rounded-full cursor-pointer hover:bg-yellow-200 transition">
                    <FiShoppingCart size={16} />
                  </div>
                </div>

                {/* Order Button */}
                <button
                  className={`mt-4 w-full py-2 rounded-full text-sm font-medium transition ${
                    food.is_available
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!food.is_available}
                >
                  {food.is_available ? "Order Now" : "Not Available"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};