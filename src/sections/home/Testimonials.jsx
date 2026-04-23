// // ================= TESTIMONIAL.jsx =================
// import { FaStar } from "react-icons/fa";

// export const Testimonial = () => {
//   const reviews = Array(6).fill({
//     name: "Sarah Paul",
//     date: "21 Oct 2023",
//     text: "Delicious food, great packaging and fast delivery",
//     avatar: "https://i.pravatar.cc/40?img=5",
//   });

//   return (
//     <section className="bg-[#F6E6C7] py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
        
//         {/* Small heading */}
//         <p className="text-sm text-red-500 font-semibold mb-2">
//           Customers Review
//         </p>

//         {/* Main heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
//           What Our Customers Say
//         </h2>

//         {/* Reviews grid */}
//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           {reviews.map((item, index) => (
//             <div key={index} className="space-y-3">
              
//               {/* User info */}
//               <div className="flex items-center gap-3">
//                 <img
//                   src={item.avatar}
//                   alt={item.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold text-sm text-gray-800">
//                     {item.name}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     On {item.date}
//                   </p>
//                 </div>
//               </div>

//               {/* Stars */}
//               <div className="flex gap-1 text-red-500 text-sm">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>

//               {/* Review text */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };









// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";

// export const Testimonial = () => {
//   const reviews = Array(6).fill({
//     name: "Sarah Paul",
//     date: "21 Oct 2023",
//     text: "Delicious food, great packaging and fast delivery",
//     avatar: "https://i.pravatar.cc/40?img=5",
//   });

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#F6E6C7] py-20"
//     >
//       <div className="max-w-7xl mx-auto px-6 text-center">
        
//         {/* Small heading */}
//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="text-sm text-red-500 font-semibold mb-2"
//         >
//           Customers Review
//         </motion.p>

//         {/* Main heading */}
//         <motion.h2
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-14"
//         >
//           What Our Customers Say
//         </motion.h2>

//         {/* Reviews grid */}
//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           {reviews.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.12 }}
//               whileHover={{ y: -6 }}
//               className="space-y-3"
//             >
              
//               {/* User info */}
//               <div className="flex items-center gap-3">
//                 <motion.img
//                   src={item.avatar}
//                   alt={item.name}
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4 }}
//                   whileHover={{ scale: 1.08 }}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />

//                 <div>
//                   <p className="font-semibold text-sm text-gray-800">
//                     {item.name}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     On {item.date}
//                   </p>
//                 </div>
//               </div>

//               {/* Stars */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="flex gap-1 text-red-500 text-sm"
//               >
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </motion.div>

//               {/* Review text */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };







// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";

// export const Testimonial = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch("https://api.queensplate.store/api/v1/general-reviews");
//         const json = await response.json();
//         if (json.success) {
//           setReviews(json.data);
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#F6E6C7] py-20"
//     >
//       <div className="max-w-7xl mx-auto px-6 text-center">
        
//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="text-sm text-red-500 font-semibold mb-2"
//         >
//           Customers Review
//         </motion.p>

//         <motion.h2
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-14"
//         >
//           What Our Customers Say
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           {loading ? (
//              <p className="col-span-full text-center text-gray-500">Loading reviews...</p>
//           ) : reviews.length > 0 ? (
//             reviews.map((item, index) => (
//               <motion.div
//                 key={item.id || index}
//                 initial={{ y: 60, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.12 }}
//                 whileHover={{ y: -6 }}
//                 className="space-y-3"
//               >
                
//                 <div className="flex items-center gap-3">
//                   <motion.img
//                     src={item.user_image || "https://i.pravatar.cc/40"} 
//                     alt={item.user_name}
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4 }}
//                     whileHover={{ scale: 1.08 }}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />

//                   <div>
//                     <p className="font-semibold text-sm text-gray-800">
//                       {item.user_name || "Anonymous"}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {item.created_at ? new Date(item.created_at).toLocaleDateString() : "Recent"}
//                     </p>
//                   </div>
//                 </div>

//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="flex gap-1 text-red-500 text-sm"
//                 >
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar 
//                         key={i} 
//                         className={i < (item.rating || 5) ? "text-red-500" : "text-gray-300"} 
//                     />
//                   ))}
//                 </motion.div>

//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {item.comment || item.review_text}
//                 </p>
//               </motion.div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-500">No reviews yet. Be the first to leave one!</p>
//           )}
//         </div>
//       </div>
//     </motion.section>
//   );
// };






import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://api.queensplate.store/api/v1/general-reviews");
        const json = await response.json();
        if (json.success) {
          setReviews(json.data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#F6E6C7] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm text-red-500 font-semibold mb-2"
        >
          Customers Review
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-14"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {loading ? (
             <p className="col-span-full text-center text-gray-500 font-medium">Loading reviews...</p>
          ) : reviews.length > 0 ? (
            reviews.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="space-y-3 bg-white/30 p-6 rounded-2xl backdrop-blur-sm shadow-sm"
              >
                
                <div className="flex items-center gap-3">
                  <motion.img
                    src={`https://ui-avatars.com/api/?name=${item.user_name || 'User'}&background=random`} 
                    alt="User"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />

                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {item.user_name || "Valued Customer"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.created_at ? new Date(item.created_at).toLocaleDateString(undefined, { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      }) : "Recent"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 text-red-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                        key={i} 
                        // API returns rating as a string "5"
                        className={i < parseInt(item.rating) ? "text-red-500" : "text-gray-300"} 
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No reviews yet. Be the first to leave one!</p>
          )}
        </div>
      </div>
    </motion.section>
  );
};