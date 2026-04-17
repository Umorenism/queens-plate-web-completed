

// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import logo from "../../assets/image/logo.svg"; // Adjust the path as needed
// export const Footer = () => {
//   return (
//     <footer className="bg-[#9C1E2E] text-white py-12">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
//         {/* Left Section - Logo & Description */}
//         <div>
//           <div className="flex items-center gap-2 mb-3">
//             <img 
//               src={logo}
//               alt="Queen's Plate Logo" 
//               className="h-[80px] w-[75px] object-contain"
//             />
//             {/* If you have the exact logo as a local asset, replace the img src above */}
//           </div>
          
//           <p className="text-sm max-w-[600px] leading-relaxed">
//             Delicious Nigerian meals delivered fast. Download our app and 
//             experience the taste of home.
//           </p>
//         </div>

//         {/* Middle Section - Quick Links */}
//         <div>
//           <h3 className="font-semibold text-[#D4AF37] font-dm text-lg mb-4">Quick Links</h3>
//           <ul className="text-sm space-y-2">
//             <li><a href="#" className="hover:underline">About</a></li>
//             <li><a href="#" className="hover:underline">Services</a></li>
//             <li><a href="#" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>

//         {/* Right Section - Contact Us */}
//         <div>
//           <h3 className="font-semibold text-[#D4AF37] font-dm text-lg mb-4">Contact Us</h3>
          
//           <div className="bg-white text-[#9C1E2E] rounded-lg p-4 flex items-start gap-3 w-fit">
//             <div className="w-8 h-8 bg-[#9C1E2E] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//               🍽️
//             </div>
//             <div>
//               <p className="font-medium">Outdoor Catering</p>
//               <p className="text-xs">Chat with us for custom catering menus and event services.</p>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-6">
//             <a href="#" className="text-2xl hover:scale-110 transition-transform">
//               <FaInstagram className="text-yellow-500"/>
//             </a>
//             <a href="#" className="text-2xl hover:scale-110 transition-transform">
//               <FaFacebook className="text-blue-600"/>
//             </a>
            
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };








// import { motion } from "framer-motion";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import logo from "../../assets/image/footerimg.svg";
// import icon from '../../assets/icons/footericon.svg'
// import ig1 from '../../assets/icons/ig.svg'
// import fb1 from '../../assets/icons/fb.svg'

// export const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#9C1E2E] text-white py-12"
//     >
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

//         {/* Left Section */}
//         <div>

//           <motion.div
//             initial={{ x: -60, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center gap-2 mb-3"
//           >
//             <img
//               src={logo}
//               alt="Queen's Plate Logo"
//               className="h-[80px] w-[75px] object-contain"
//             />
//           </motion.div>

//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-sm max-w-[600px] leading-relaxed"
//           >
//             Delicious Nigerian meals delivered fast. Download our app and
//             experience the taste of home.
//           </motion.p>

//         </div>

//         {/* Quick Links */}
//         <div>

//           <motion.h3
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="font-semibold text-[#D4AF37] font-dm text-lg mb-4"
//           >
//             Quick Links
//           </motion.h3>

//           <ul className="text-sm space-y-2">

//             {["About", "Services", "Contact"].map((item, index) => (
//               <motion.li
//                 key={item}
//                 initial={{ x: -30, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.15 }}
//               >
//                 <a href="#" className="hover:underline">
//                   {item}
//                 </a>
//               </motion.li>
//             ))}

//           </ul>

//         </div>

//         {/* Contact Section */}
//         <div>

//           <motion.h3
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="font-semibold text-[#D4AF37] font-dm text-lg mb-4"
//           >
//             Contact Us
//           </motion.h3>

//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4 }}
//             whileHover={{ y: -4 }}
//             className="bg-white text-[#9C1E2E] rounded-lg p-4 flex items-start gap-3 w-fit"
//           >
//             <div className="w-10 h-10 bg-[#9C1E2E] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//               <img src={icon} alt="footer-icons" className="h-auto object-contain" />
//             </div>

//             <div>
//               <p className="font-medium">Outdoor Catering</p>
//               <p className="text-xs">
//                 Chat with us for custom catering menus and event services.
//               </p>
//             </div>
//           </motion.div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-6">

//             <motion.a
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               href="#"
//               className="text-2xl"
//             >
//               {/* <FaInstagram className="text-yellow-500" /> */}
//               <img src={ig1} alt="" className="object-contain"/>
//             </motion.a>

//             <motion.a
//               whileHover={{ scale: 1.2, rotate: -5 }}
//               whileTap={{ scale: 0.9 }}
//               href="#"
//               className="text-2xl"
//             >
//               {/* <FaFacebook className="text-blue-600" /> */}
//               <img src={fb1} alt="" className="object-contain" />
//             </motion.a>

//           </div>

//         </div>

//       </div>
//     </motion.footer>
//   );
// };





import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../../assets/image/footerimg.svg";
import icon from '../../assets/icons/footericon.svg';
import ig1 from '../../assets/icons/ig.svg';
import fb1 from '../../assets/icons/fb.svg';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#9C1E2E] text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Left Section */}
        <div>
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <img
              src={logo}
              alt="Queen's Plate Logo"
              className="h-[80px] w-[75px] object-contain"
            />
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm max-w-[600px] leading-relaxed"
          >
            Delicious Nigerian meals delivered fast. Download our app and
            experience the taste of home.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-semibold text-[#D4AF37] font-dm text-lg mb-4"
          >
            Quick Links
          </motion.h3>

          <ul className="text-sm space-y-2">
            {["About", "Services", "Contact", "Download App"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <a 
                  href={item === "Download App" ? "#download-section" : "#"} 
                  className={`hover:underline ${item === "Download App" ? "text-[#D4AF37] font-bold" : ""}`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-semibold text-[#D4AF37] font-dm text-lg mb-4"
          >
            Contact Us
          </motion.h3>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-white text-[#9C1E2E] rounded-lg p-4 flex items-start gap-3 w-fit"
          >
            <div className="w-10 h-10 bg-[#9C1E2E] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <img src={icon} alt="footer-icons" className="h-auto object-contain" />
            </div>

            <div>
              <p className="font-medium">Outdoor Catering</p>
              <p className="text-xs">
                Chat with us for custom catering menus and event services.
              </p>
            </div>
          </motion.div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 items-center">
            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/queensplate01?igsh=YXNqMmM5dzdtbm9y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <img src={ig1} alt="Instagram" className="object-contain w-6 h-6"/>
            </motion.a>

            {/* Facebook */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/share/18JKvcLQj8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <img src={fb1} alt="Facebook" className="object-contain w-6 h-6" />
            </motion.a>

            {/* TikTok */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://vm.tiktok.com/ZS9LCAaCV28e1-d6lpL/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white"
            >
              <FaTiktok />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};