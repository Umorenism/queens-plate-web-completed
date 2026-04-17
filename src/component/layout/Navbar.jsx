// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import logo from "../../assets/image/logo.svg";
// export const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Menu", path: "/menu" },
//     { name: "Services", path: "/services" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   // detect scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/70 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* Logo animation */}
//         <motion.h1
//           whileHover={{ scale: 1.05 }}
//           className="text-xl font-bold text-red-600 cursor-pointer"
//         >
//          <img src={logo} alt="queens Plates Logo" className="h-[80px] object-contain"/>
//         </motion.h1>

//         {/* Nav Links */}
//         <div className="hidden md:flex gap-8 px-6 py-3 rounded-[40px] bg-[#FFFFFF57] backdrop-blur-md text-sm font-medium text-gray-700">
//           {navLinks.map((link, i) => (
//             <motion.div
//               key={link.name}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.08 }}
//               whileHover={{ y: -2 }}
//             >
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `relative transition ${
//                     isActive ? "text-red-600" : "hover:text-red-600"
//                   }`
//                 }
//               >
//                 {link.name}

//                 {/* animated underline */}
//                 <motion.span
//                   layoutId="underline"
//                   className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 origin-left scale-x-0 group-hover:scale-x-100"
//                 />
//               </NavLink>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Button animation */}
//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-[#D4AF37] text-white px-6 py-2 rounded-full text-sm shadow-md"
//         >
//           Download App
//         </motion.button>

//       </div>
//     </motion.nav>
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

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
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
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpenDrawer(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-[260px] h-full bg-white z-50 shadow-lg flex flex-col p-6"
            >
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setOpenDrawer(false)}
                  className="text-2xl"
                >
                  <FiX />
                </button>
              </div>

              {/* Mobile Links */}
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

              {/* CTA */}
              <motion.button
                whileTap={{ scale: 0.95 }}
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