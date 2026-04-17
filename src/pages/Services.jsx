// import React from "react";
// import {
//   FiClock,
//   FiTruck,
//   FiShoppingBag,
//   FiMapPin,
// } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { Testimonial } from "../sections/home/Testimonials";

// const services = [
//   {
//     icon: <FiClock size={18} />,
//     title: "Freshly Prepared Meals",
//     desc: "Enjoy hot, delicious meals made fresh daily with quality ingredients.",
//   },
//   {
//     icon: <FiTruck size={18} />,
//     title: "Fast Food Delivery",
//     desc: "Get your meals delivered quickly and safely right to your doorstep.",
//   },
//   {
//     icon: <FiShoppingBag size={18} />,
//     title: "Online Ordering",
//     desc: "Order your favorite meals easily from anywhere at any time.",
//   },
//   {
//     icon: <FiMapPin size={18} />,
//     title: "Real-Time Tracking",
//     desc: "Track your order live from kitchen preparation to delivery.",
//   },
// ];

// const Service = () => {
//   return (
//     <>
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className=" mt-10 py-20"
//     >
//       <div className="max-w-7xl mx-auto text-center">
        
       

//         {/* main heading */}
//         <motion.h2
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
//         >
//           Our Services
//         </motion.h2>

//         {/* cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               whileHover={{ y: -8 }}
//               className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 text-left"
//             >
//               {/* icon */}
//               <motion.div
//                 whileHover={{ scale: 1.15 }}
//                 className="w-10 h-10 flex items-center justify-center rounded-md border border-red-200 text-red-500 mb-4"
//               >
//                 {service.icon}
//               </motion.div>

//               {/* title */}
//               <h3 className="font-semibold text-gray-800 mb-2">
//                 {service.title}
//               </h3>

//               {/* description */}
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//     <Testimonial/>
//     </>
//   );
// };

// export default Service;






import React from "react";
import {
  FiClock,
  FiTruck,
  FiShoppingBag,
  FiMapPin,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Testimonial } from "../sections/home/Testimonials";

const services = [
  {
    icon: <FiClock size={18} />,
    title: "Freshly Prepared Meals",
    desc: "Enjoy hot, delicious meals made fresh daily with quality ingredients.",
  },
  {
    icon: <FiTruck size={18} />,
    title: "Fast Food Delivery",
    desc: "Get your meals delivered quickly and safely right to your doorstep.",
  },
  {
    icon: <FiShoppingBag size={18} />,
    title: "Order your favorite lanch meals easily",
    desc: "Order your favorite meals easily from anywhere at any time.",
  },
  {
    icon: <FiMapPin size={18} />,
    title: "Real-Time Tracking",
    desc: "Track your order live from kitchen preparation to delivery.",
  },
];

const Service = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" py-24 bg-[#FFF5E9]"
      >
        <div className="max-w-7xl mt-10 mx-auto text-center px-6">
          
          {/* main heading */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-16"
          >
            Our Services
          </motion.h2>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-left"
              >
                {/* icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 flex items-center justify-center rounded-lg border border-red-200 text-red-500 mb-5"
                >
                  {service.icon}
                </motion.div>

                {/* title */}
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                  {service.title}
                </h3>

                {/* description */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Testimonial />
    </>
  );
};

export default Service;