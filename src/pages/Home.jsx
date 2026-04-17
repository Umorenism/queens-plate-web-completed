// import React from "react";
// import {FeaturedMenu} from "../sections/home/FeaturedMenu";
// import Hero from "../sections/home/Hero";
// import { Testimonial } from "../sections/home/Testimonials";
// import { AboutSection } from "../sections/about/AboutSection";
// import ServiceList from "../sections/services/ServiceList";
// import { HowToOrder } from "../sections/how/HowToOrder";
// import ContactUs from "../sections/contact/Contact";



// const Home = () => {
//   return (
//     <main className="overflow-hidden">
//       <Hero/>
//       <FeaturedMenu />
//       <AboutSection/>
      
//       <ServiceList/>
//       <Testimonial />
//       <HowToOrder/>
//       <ContactUs/>
//     </main>
//   );
// };

// export default Home;





import React from "react";
import { motion } from "framer-motion";

import { FeaturedMenu } from "../sections/home/FeaturedMenu";
import Hero from "../sections/home/Hero";
import { Testimonial } from "../sections/home/Testimonials";
import { AboutSection } from "../sections/about/AboutSection";
import ServiceList from "../sections/services/ServiceList";
import { HowToOrder } from "../sections/how/HowToOrder";
import ContactUs from "../sections/contact/Contact";
import BackToTop from "../hooks/BackToTop";

// reusable animation variant
const sectionAnimation = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Home = () => {
  return (
    <main className="overflow-hidden">
      
      {/* Hero (loads immediately) */}
      <Hero />

      {/* Featured Menu */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FeaturedMenu />
      </motion.div>

      {/* About */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.div>

      {/* Services */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ServiceList />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Testimonial />
      </motion.div>

      {/* How To Order */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <HowToOrder />
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ContactUs />
        <BackToTop />
      </motion.div>

    </main>
  );
};

export default Home;