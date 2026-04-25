




// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../../assets/image/logo.svg";

// export const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Menu", path: "/menu" },
//     { name: "Services", path: "/services" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ App Download Redirect Logic
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
//     <>
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/70 backdrop-blur-md shadow-md"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

//           {/* Logo */}
//           <motion.h1
//             whileHover={{ scale: 1.05 }}
//             className="cursor-pointer"
//           >
//             <img
//               src={logo}
//               alt="queens Plates Logo"
//               className="h-[80px] object-contain"
//             />
//           </motion.h1>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex gap-8 px-6 py-3 rounded-[40px] bg-[#FFFFFF57] backdrop-blur-md text-sm font-medium text-gray-700">
//             {navLinks.map((link, i) => (
//               <motion.div
//                 key={link.name}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08 }}
//                 whileHover={{ y: -2 }}
//               >
//                 <NavLink
//                   to={link.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-red-600"
//                       : "hover:text-red-600 transition"
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               </motion.div>
//             ))}
//           </div>

//           {/* Desktop CTA */}
//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleAppRedirect}
//             className="hidden md:block bg-[#D4AF37] text-white px-6 py-2 rounded-full text-sm shadow-md"
//           >
//             Download App
//           </motion.button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpenDrawer(true)}
//             className="md:hidden text-2xl"
//           >
//             <FiMenu />
//           </button>

//         </div>
//       </motion.nav>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {openDrawer && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.4 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black z-40"
//               onClick={() => setOpenDrawer(false)}
//             />

//             {/* Drawer Panel */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.4 }}
//               className="fixed top-0 right-0 w-[260px] h-full bg-white z-50 shadow-lg flex flex-col p-6"
//             >
//               {/* Close button */}
//               <div className="flex justify-end mb-8">
//                 <button
//                   onClick={() => setOpenDrawer(false)}
//                   className="text-2xl"
//                 >
//                   <FiX />
//                 </button>
//               </div>

//               {/* Mobile Links */}
//               <div className="flex flex-col gap-6 text-lg font-medium">
//                 {navLinks.map((link) => (
//                   <NavLink
//                     key={link.name}
//                     to={link.path}
//                     onClick={() => setOpenDrawer(false)}
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-red-600"
//                         : "text-gray-700 hover:text-red-600 transition"
//                     }
//                   >
//                     {link.name}
//                   </NavLink>
//                 ))}
//               </div>

//               {/* Mobile CTA */}
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 onClick={(e) => {
//                   handleAppRedirect(e);
//                   setOpenDrawer(false);
//                 }}
//                 className="mt-auto bg-[#D4AF37] text-white py-3 rounded-full"
//               >
//                 Download App
//               </motion.button>

//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };






import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/image/logo.svg";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ App Download & Web App Redirect Logic
  const handleAppRedirect = (e) => {
    e.preventDefault();

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const androidUrl = "https://play.google.com/store/apps/details?id=com.queensplate.app";
    const iosUrl = "https://apps.apple.com/app/id1234567890";
    const webAppUrl = "https://app.queensplate.store/";

    // Android detection
    if (/android/i.test(userAgent)) {
      window.location.href = androidUrl;
      return;
    }

    // iOS detection
    if (
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      window.location.href = iosUrl;
      return;
    }

    // Desktop fallback: Open the Web App Store
    window.open(webAppUrl, "_blank");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <img
              src={logo}
              alt="queens Plates Logo"
              className="h-[80px] object-contain"
            />
          </motion.h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 px-6 py-3 rounded-[40px] bg-[#FFFFFF57] backdrop-blur-md text-sm font-medium text-gray-700">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -2 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600"
                      : "hover:text-red-600 transition"
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA - Kept Original Styling */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAppRedirect}
            className="hidden md:block bg-[#D4AF37] text-white px-6 py-2 rounded-full text-sm shadow-md"
          >
            Download App
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenDrawer(true)}
            className="md:hidden text-2xl"
          >
            <FiMenu />
          </button>

        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {openDrawer && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpenDrawer(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-[260px] h-full bg-white z-50 shadow-lg flex flex-col p-6"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setOpenDrawer(false)}
                  className="text-2xl"
                >
                  <FiX />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setOpenDrawer(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600"
                        : "text-gray-700 hover:text-red-600 transition"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile CTA - Kept Original Styling */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  handleAppRedirect(e);
                  setOpenDrawer(false);
                }}
                className="mt-auto bg-[#D4AF37] text-white py-3 rounded-full"
              >
                Download App
              </motion.button>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};