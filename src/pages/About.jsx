// import { motion } from "framer-motion";
// import qualityIcon from '../../assets/icons/Order.svg';
// import scooterIcon from '../../assets/icons/Take.svg';
// import heartIcon from '../../assets/icons/Waiter.svg';
// export const About = () => {
//   const features = [
//     {
//       title: "Quality First",
//       desc: "Every meal crafted with premium, fresh ingredients",
//       icon: heartIcon,
//     },
//     {
//       title: "Lightning Fast",
//       desc: "From our kitchen to your door in under 45 minutes",
//        icon: scooterIcon,
//     },
//     {
//       title: "Customer Love",
//       desc: "Thousands of happy customers across Uyo City",
//        icon: qualityIcon,
//     },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#F6E6C7] py-20"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Small heading */}
//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="text-sm text-red-500 font-semibold mb-2"
//         >
//           About Us
//         </motion.p>

//         {/* Main title */}
//         <motion.h2
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
//         >
//           About Queen's Plate
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
//         >
//           Queen's Plate is a modern food service platform that brings delicious
//           Nigerian meals straight to your doorstep. We focus on quality, speed,
//           and customer satisfaction — because you deserve a meal that makes you
//           smile.
//         </motion.p>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-10 mt-16">
//           {features.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{ y: -8 }}
//               className="flex flex-col items-center"
//             >
              
//               {/* Icon */}
//               <motion.img
//                 src={item.icon}
//                 alt={item.title}
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 whileHover={{ scale: 1.08 }}
//                 className="w-[205px] h-[205px] mb-4 object-contain"
//               />

//               {/* Title */}
//               <h3 className="font-semibold text-lg text-gray-800">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 text-sm mt-2 max-w-[230px]">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };




// import { motion } from "framer-motion";
// import qualityIcon from '../assets/icons/order.svg';
// import scooterIcon from '../assets/icons/take.svg';
// import heartIcon from '../assets/icons/waiter.svg';
// export default  About = () => {
//   const features = [
//     {
//       title: "Quality First",
//       desc: "Every meal crafted with premium, fresh ingredients",
//       icon: heartIcon,
//     },
//     {
//       title: "Lightning Fast",
//       desc: "From our kitchen to your door in under 45 minutes",
//       icon: scooterIcon,
//     },
//     {
//       title: "Customer Love",
//       desc: "Thousands of happy customers across Uyo City",
//       icon: qualityIcon,
//     },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#F6E6C7] py-20"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Small heading */}
//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="text-sm text-red-500 font-semibold mb-2"
//         >
//           About Us
//         </motion.p>

//         {/* Main title */}
//         <motion.h2
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
//         >
//           About Queen's Plate
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
//         >
//           Queen's Plate is a modern food service platform that brings delicious
//           Nigerian meals straight to your doorstep. We focus on quality, speed,
//           and customer satisfaction — because you deserve a meal that makes you
//           smile.
//         </motion.p>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-10 mt-16">
//           {features.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{ y: -8 }}
//               className="flex flex-col items-center"
//             >
              
//               {/* Icon */}
//               <motion.img
//                 src={item.icon}
//                 alt={item.title}
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 whileHover={{ scale: 1.08 }}
//                 className="w-[205px] h-[205px] mb-4 object-contain"
//               />

//               {/* Title */}
//               <h3 className="font-semibold text-lg text-gray-800">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 text-sm mt-2 max-w-[230px]">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };



import { motion } from "framer-motion";
import qualityIcon from '../assets/icons/orderimg.svg';
import scooterIcon from '../assets/icons/takeimg.svg';
import heartIcon from '../assets/icons/waiterimg.svg';

const About = () => {
  const features = [
    {
      title: "Quality First",
      desc: "Every meal crafted with premium, fresh ingredients",
      icon: heartIcon,
    },
    {
      title: "Lightning Fast",
      desc: "From our kitchen to your door in under 45 minutes",
      icon: scooterIcon,
    },
    {
      title: "Customer Love",
      desc: "Thousands of happy customers across Uyo City",
      icon: qualityIcon,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#F6E6C7] py-20"
    >
      <div className="max-w-7xl mt-10 mx-auto px-6 text-center">

        {/* <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm text-red-500 font-semibold mb-2"
        >
          About Us
        </motion.p> */}

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-red-500 mb-6"
        >
          About Queen's Plate
        </motion.h2>

        {/* <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
        >
          Queen’s Plate is a premium corporate lunch service bringing delicious Nigerian meals to workplaces across Abuja — crafted for consistency, delivered with care.

We specialize in providing freshly prepared meals for offices, with a focus on quality ingredients, reliable daily service, and a seamless experience from kitchen to workplace.

Our menu features a variety of well-loved Nigerian dishes — from perfectly cooked rice options to flavorful pasta, proteins, and sides — all thoughtfully prepared to satisfy and energize your team.

At Queen’s Plate, we believe a good meal should do more than fill you up — it should bring comfort, ease, and a touch of excellence to your workday.
        </motion.p> */}

        <motion.div
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="max-w-3xl mx-auto text-gray-600 space-y-6 text-[15.5px] md:text-[17px] leading-relaxed font-light"
>
  <p>
    Queen’s Plate is a <span className="font-semibold text-gray-900">premium corporate lunch service</span> that brings 
    authentic, delicious Nigerian meals directly to workplaces across Abuja.
  </p>

  <p>
    We specialize in crafting <span className="text-emerald-700 font-medium">fresh, high-quality meals</span> with 
    consistent taste and reliable delivery — making office lunch effortless and enjoyable.
  </p>

  <p>
    From fragrant rice dishes and hearty pastas to succulent proteins and flavorful sides, our menu celebrates 
    the best of Nigerian cuisine, prepared fresh daily to energize and delight your team.
  </p>

  <p className="pt-2 italic text-gray-700">
    At Queen’s Plate, we don’t just serve food — we deliver comfort, excellence, and a little joy to every workday.
  </p>
</motion.div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center"
            >
              <motion.img
                src={item.icon}
                alt={item.title}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className="w-[205px] h-[205px] mb-4 object-contain"
              />

              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2 max-w-[230px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;