



// import { motion } from "framer-motion";
// import React from "react";
// import { slideUp } from "../../component/animation/variants";
// import logo from "../../assets/image/heroimg.svg"; // Replace with your actual logo path

// const Hero = () => {
//   // Function to scroll to the mobile app section
//   const scrollToApp = () => {
//     const appSection = document.getElementById("download-app");
//     if (appSection) {
//       appSection.scrollIntoView({ behavior: "smooth" });
//     } else {
//       // Fallback: If section id isn't found, scroll to bottom where app links usually are
//       window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//     }
//   };




//    // ✅ App Download Redirect Logic
//   const handleAppRedirect = (e) => {
//     e.preventDefault();

//     const userAgent =
//       navigator.userAgent || navigator.vendor || window.opera;

//     const androidUrl =
//       "https://play.google.com/store/apps/details?id=com.queensplate.app";

//     const iosUrl =
//       "https://apps.apple.com/app/id1234567890";

//     // Android detection
//     if (/android/i.test(userAgent)) {
//       window.location.href = androidUrl;
//       return;
//     }

//     // iOS detection (supports modern iPads too)
//     if (
//       /iPad|iPhone|iPod/.test(userAgent) ||
//       (navigator.platform === "MacIntel" &&
//         navigator.maxTouchPoints > 1)
//     ) {
//       window.location.href = iosUrl;
//       return;
//     }

//     // Desktop fallback
//     const section = document.getElementById("download-section");

//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     } else {
//       window.open(androidUrl, "_blank");
//     }
//   };

//   return (
//     <section className="relative min-h-screen w-full flex items-center bg-[#FFF5E9] overflow-hidden px-6 lg:px-20">
//       <div className="container p-5 mt-40 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
//         {/* Left Content */}
//         <motion.div 
//           variants={slideUp}
//           initial="hidden"
//           animate="show"
//           className="z-10 space-y-6"
//         >
//           <div className="relative inline-block">
//             <motion.h1 
//               className="text-5xl lg:text-[64px] font-semibold text-[#1A1A1A] leading-tight"
//               variants={slideUp}
//               initial="hidden"
//               animate="show"
//             >
//               Delicious <br />
//               delivered <span className="text-[#A41C2E]">fast</span>
//             </motion.h1>
//             {/* The "Meal" Tag */}
//             <motion.div 
//               initial={{ rotate: -15, scale: 0 }}
//               animate={{ rotate: -15, scale: 1 }}
//               className="absolute -right-5 top-0 bg-[#A41C2E] hidden md:block text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg"
//             >
//               Meal
//             </motion.div>
//           </div>

//           <motion.p variants={slideUp}
//           initial="hidden"
//           animate="show" className="text-gray-700 text-lg max-w-md leading-relaxed">
//             Order your favorite Nigerian dishes from Queen's Plate with ease. 
//             Fresh ingredients, bold flavors, right to your door.
//           </motion.p>

//           <motion.button 
//             onClick={handleAppRedirect}
//             variants={slideUp}
//             initial="hidden"
//             animate="show"
//             className="bg-[#A41C2E] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:bg-[#851624] transition-colors"
//           >
//             Order On the App
//           </motion.button>

//           {/* Social Proof Section */}
//           <div className="flex items-center gap-4 pt-4">
//             <motion.div initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }} className="flex -space-x-3">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
//                   <img src={logo} alt="user" className="w-full h-full object-cover" />
//                 </div>
//               ))}
//             </motion.div>
//             <div>
//               <p className="font-bold text-sm">Our Happy Customer</p>
//               <div className="flex flex-col items-start">
//                 <p className="text-xs text-gray-500">⭐ 4.8 <span className="ml-1">(12.5k Review)</span></p>
//                 <button 
//                   onClick={() => document.getElementById('testimonials')?.scrollIntoView({behavior: 'smooth'})}
//                   className="text-xs font-bold text-[#A41C2E] flex items-center gap-1 mt-1 hover:underline"
//                 >
//                   See more <div className="border-[#A41C2E] border text-[#A41C2E] rounded-full w-4 h-4 flex items-center justify-center text-[10px]">→</div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Visuals */}
//         <div className="relative flex justify-center items-center">
//           {/* Main Burgundy Background Shape */}
//           <div className="absolute w-[80%] h-[78%] bg-[#A41C2E] rounded-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-1deg]" />
          
//           {/* Main Large Food Circle */}
//           <motion.div 
//            initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative z-10 w-72 h-72 md:w-[450px] mb-28 md:h-[450px] rounded-full border-[15px] border-white shadow-2xl overflow-hidden"
//           >
//             <img 
//               src={logo} 
//               className="w-full h-full object-cover" 
//               alt="Main Dish" 
//             />
//           </motion.div>

//           {/* Smaller Floating Dishes */}
//           <div className="absolute -bottom-10 z-20 flex gap-4">
//             {['noodles', 'jollof', 'salad'].map((dish, idx) => (
//               <motion.div 
//                 key={idx} 
//                 className="w-20 h-20 md:w-28 md:h-28 mb-10 md:mb-8 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.8, delay: idx * 0.2 }}
//               >
//                  <img src={logo} className="w-full h-full object-cover" alt={dish} />
//               </motion.div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;








import { motion } from "framer-motion";
import React from "react";
import { slideUp } from "../../component/animation/variants";
import logo from "../../assets/image/heroimg.svg"; 

const Hero = () => {
  // Constants for redirects
  const APP_URL = "https://app.queensplate.store/";
  const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.queensplate.app";
  const IOS_URL = "https://apps.apple.com/app/id1234567890";

  // ✅ Unified Redirect Logic
  const handleOrderRedirect = (e) => {
    e.preventDefault();

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 1. Android Detection -> Go to Play Store
    if (/android/i.test(userAgent)) {
      window.location.href = ANDROID_URL;
      return;
    }

    // 2. iOS Detection -> Go to App Store
    if (
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      window.location.href = IOS_URL;
      return;
    }

    // 3. Desktop/Others Fallback -> Go to the Web App (Live Store)
    window.open(APP_URL, "_blank");
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#FFF5E9] overflow-hidden px-6 lg:px-20">
      <div className="container p-5 mt-40 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div 
          variants={slideUp}
          initial="hidden"
          animate="show"
          className="z-10 space-y-6"
        >
          <div className="relative inline-block">
            <motion.h1 
              className="text-5xl lg:text-[64px] font-black text-[#1A1A1A] leading-tight"
              variants={slideUp}
            >
              Delicious <br />
              delivered <span className="text-[#A41C2E]">fast</span>
            </motion.h1>
            
            {/* The "Meal" Tag */}
            <motion.div 
              initial={{ rotate: -15, scale: 0 }}
              animate={{ rotate: -15, scale: 1 }}
              className="absolute -right-5 top-0 bg-[#A41C2E] hidden md:block text-white px-10 py-4 rounded-full font-black text-xl shadow-lg"
            >
              Meal
            </motion.div>
          </div>

          <motion.p variants={slideUp} className="text-gray-700 text-lg max-w-md leading-relaxed font-medium">
            Order your favorite Nigerian dishes from Queen's Plate with ease. 
            Fresh ingredients, bold flavors, right to your door.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              onClick={handleOrderRedirect}
              variants={slideUp}
              className="bg-[#A41C2E] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-red-900/20 hover:bg-[#851624] transition-all active:scale-95"
            >
              Order Now
            </motion.button>
          </div>

          {/* Social Proof Section */}
          <div className="flex items-center gap-4 pt-4">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={logo} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
            <div>
              <p className="font-black text-sm text-gray-800">Our Happy Customers</p>
              <div className="flex flex-col items-start">
                <p className="text-xs text-gray-500 font-bold">⭐ 4.8 <span className="ml-1 text-gray-400 font-medium">(12.5k Reviews)</span></p>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({behavior: 'smooth'})}
                  className="text-xs font-black text-[#A41C2E] flex items-center gap-1 mt-1 hover:underline uppercase tracking-wider"
                >
                  See more <div className="border-[#A41C2E] border text-[#A41C2E] rounded-full w-4 h-4 flex items-center justify-center text-[10px]">→</div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visuals */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[80%] h-[78%] bg-[#A41C2E] rounded-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-1deg]" />
          
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 w-72 h-72 md:w-[450px] mb-28 md:h-[450px] rounded-full border-[15px] border-white shadow-2xl overflow-hidden bg-white"
          >
            <img 
              src={logo} 
              className="w-full h-full object-cover" 
              alt="Main Dish" 
            />
          </motion.div>

          {/* Smaller Floating Dishes */}
          <div className="absolute -bottom-10 z-20 flex gap-4">
            {['noodles', 'jollof', 'salad'].map((dish, idx) => (
              <motion.div 
                key={idx} 
                className="w-20 h-20 md:w-28 md:h-28 mb-10 md:mb-8 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white"
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (idx * 0.2) }}
              >
                 <img src={logo} className="w-full h-full object-cover" alt={dish} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;