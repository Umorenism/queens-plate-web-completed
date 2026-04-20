// import { motion } from "framer-motion";
// import React from "react";
// import { slideUp } from "../../component/animation/variants";

// const Hero = () => {
//   return (
//     <section className="h-screen flex items-center justify-center bg-gray-500">
//       <motion.h1
//         variants={slideUp}
//         initial="hidden"
//         animate="show"
//         className="text-5xl bg-red-500 font-bold text-center"
//       >
//         Welcome to Our Restaurant
//       </motion.h1>
//     </section>
//   );
// };

// export default Hero;











// import { motion } from "framer-motion";
// import React from "react";
// import { slideUp } from "../../component/animation/variants";
// import logo from "../../assets/image/heroimg.svg"; // Replace with your actual logo path

// // Icons or images can be replaced with your actual asset paths
// const Hero = () => {
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
//             variants={slideUp}
//             initial="hidden"
//             animate="show"
//             className="bg-[#A41C2E] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:bg-[#851624] transition-colors"
//           >
//             Order On the App
//           </motion.button>

//           {/* Social Proof Section */}
//           <div className="flex items-center gap-4 pt-4">
//             <motion.div  initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8 }} className="flex -space-x-3">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
//                   <img src={logo} alt="user" />
//                 </div>
//               ))}
//             </motion.div>
//             <div>
//               <p className="font-bold text-sm">Our Happy Customer</p>
//               <p className="text-xs text-gray-500">⭐ 4.8 <span className="ml-1">(12.5k Review)</span></p>
             
//             </div>
             
//           </div>
//           <button className="text-xs font-bold text-[#A41C2E]  flex items-start gap-1">
//                 See more <div className="border-[#A41C2E] border text-[#A41C2E] rounded-full w-5 h-5 text-[10px]">→</div>
//               </button>
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
import logo from "../../assets/image/heroimg.svg"; // Replace with your actual logo path

const Hero = () => {
  // Function to scroll to the mobile app section
  const scrollToApp = () => {
    const appSection = document.getElementById("download-app");
    if (appSection) {
      appSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: If section id isn't found, scroll to bottom where app links usually are
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
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
              className="text-5xl lg:text-[64px] font-semibold text-[#1A1A1A] leading-tight"
              variants={slideUp}
              initial="hidden"
              animate="show"
            >
              Delicious <br />
              delivered <span className="text-[#A41C2E]">fast</span>
            </motion.h1>
            {/* The "Meal" Tag */}
            <motion.div 
              initial={{ rotate: -15, scale: 0 }}
              animate={{ rotate: -15, scale: 1 }}
              className="absolute -right-5 top-0 bg-[#A41C2E] hidden md:block text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg"
            >
              Meal
            </motion.div>
          </div>

          <motion.p variants={slideUp}
          initial="hidden"
          animate="show" className="text-gray-700 text-lg max-w-md leading-relaxed">
            Order your favorite Nigerian dishes from Queen's Plate with ease. 
            Fresh ingredients, bold flavors, right to your door.
          </motion.p>

          <motion.button 
            onClick={scrollToApp}
            variants={slideUp}
            initial="hidden"
            animate="show"
            className="bg-[#A41C2E] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:bg-[#851624] transition-colors"
          >
            Order On the App
          </motion.button>

          {/* Social Proof Section */}
          <div className="flex items-center gap-4 pt-4">
            <motion.div initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }} className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img src={logo} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
            <div>
              <p className="font-bold text-sm">Our Happy Customer</p>
              <div className="flex flex-col items-start">
                <p className="text-xs text-gray-500">⭐ 4.8 <span className="ml-1">(12.5k Review)</span></p>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({behavior: 'smooth'})}
                  className="text-xs font-bold text-[#A41C2E] flex items-center gap-1 mt-1 hover:underline"
                >
                  See more <div className="border-[#A41C2E] border text-[#A41C2E] rounded-full w-4 h-4 flex items-center justify-center text-[10px]">→</div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visuals */}
        <div className="relative flex justify-center items-center">
          {/* Main Burgundy Background Shape */}
          <div className="absolute w-[80%] h-[78%] bg-[#A41C2E] rounded-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-1deg]" />
          
          {/* Main Large Food Circle */}
          <motion.div 
           initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-72 h-72 md:w-[450px] mb-28 md:h-[450px] rounded-full border-[15px] border-white shadow-2xl overflow-hidden"
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
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