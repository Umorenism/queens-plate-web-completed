// // ================= HOWTOORDER.jsx =================
// import { FaDownload, FaSearch, FaShoppingCart, FaBox } from "react-icons/fa";

// export const HowToOrder = () => {
//   const steps = [
//     {
//       icon: <FaDownload />,
//       step: "Step 1",
//       title: "Download the App",
//       desc: "Get the Queen's Plate app on your phone",
//     },
//     {
//       icon: <FaSearch />,
//       step: "Step 2",
//       title: "Browse Meals",
//       desc: "Explore our wide range of Nigerian dishes",
//     },
//     {
//       icon: <FaShoppingCart />,
//       step: "Step 3",
//       title: "Place Your Order",
//       desc: "Add meals to cart and checkout in seconds",
//     },
//     {
//       icon: <FaBox />,
//       step: "Step 4",
//       title: "Get it Delivered",
//       desc: "Sit back while we bring the food to you",
//     },
//   ];

//   return (
//     <section className="bg-[#B3202A] py-20 text-center text-white">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           How to Order
//         </h2>
//         <p className="text-sm text-white/80 mb-14">
//           Four simple steps to your next great meal
//         </p>

//         {/* Steps */}
//         <div className="grid md:grid-cols-4 gap-10 mb-12">
//           {steps.map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
              
//               {/* Icon box */}
//               <div className="bg-white text-[#B3202A] p-4 rounded-xl text-xl mb-4">
//                 {item.icon}
//               </div>

//               {/* Step label */}
//               <p className="text-xs text-white/70 mb-1">
//                 {item.step}
//               </p>

//               {/* Title */}
//               <h3 className="font-semibold mb-2">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-white/80 max-w-xs">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col md:flex-row justify-center gap-4">
          
//           {/* Primary button */}
//           <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
//             Download App
//           </button>

//           {/* Outline button */}
//           <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#B3202A] transition">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };







import { motion } from "framer-motion";
import { FaDownload, FaSearch, FaShoppingCart, FaBox } from "react-icons/fa";

export const HowToOrder = () => {
  const steps = [
    {
      icon: <FaDownload />,
      step: "Step 1",
      title: "Download the App",
      desc: "Get the Queen's Plate app on your phone",
    },
    {
      icon: <FaSearch />,
      step: "Step 2",
      title: "Browse Meals",
      desc: "Explore our wide range of Nigerian dishes",
    },
    {
      icon: <FaShoppingCart />,
      step: "Step 3",
      title: "Place Your Order",
      desc: "Add meals to cart and checkout in seconds",
    },
    {
      icon: <FaBox />,
      step: "Step 4",
      title: "Get it Delivered",
      desc: "Sit back while we bring the food to you",
    },
  ];


  // ✅ App Download Redirect Logic
  const handleAppRedirect = (e) => {
    e.preventDefault();

    const userAgent =
      navigator.userAgent || navigator.vendor || window.opera;

    const androidUrl =
      "https://play.google.com/store/apps/details?id=com.queensplate.app";

    const iosUrl =
      "https://apps.apple.com/app/id1234567890";

    // Android detection
    if (/android/i.test(userAgent)) {
      window.location.href = androidUrl;
      return;
    }

    // iOS detection (supports modern iPads too)
    if (
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === "MacIntel" &&
        navigator.maxTouchPoints > 1)
    ) {
      window.location.href = iosUrl;
      return;
    }

    // Desktop fallback
    const section = document.getElementById("download-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(androidUrl, "_blank");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#B3202A] py-20 text-center text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          How to Order
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-white/80 mb-14"
        >
          Four simple steps to your next great meal
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center"
            >
              
              {/* Icon box */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.15 }}
                className="bg-white text-[#B3202A] p-4 rounded-xl text-xl mb-4"
              >
                {item.icon}
              </motion.div>

              {/* Step label */}
              <p className="text-xs text-white/70 mb-1">
                {item.step}
              </p>

              {/* Title */}
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/80 max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          
          {/* Primary button */}
          <motion.button
          onClick={handleAppRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Download App
          </motion.button>

          {/* Outline button */}
          <motion.button
            onClick={handleAppRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#B3202A] transition"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};