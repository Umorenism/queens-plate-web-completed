

// import { useState } from 'react';
// import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Message sent successfully! (Demo)');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#fff7e6] via-[#ffe4c4] to-[#ffd4a3] flex items-center justify-center p-6 font-sans">
//       <div className="w-full max-w-7xl overflow-hidden ">
//         {/* Header */}
//         <div className=" py-3 text-center">
          
//           <p className="text-[#A61E30] text-sm mt-2 font-medium">Get In Touch</p>
//         </div>

//         <div className="p-10 md:p-16">
//           <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-tight">
//             Contact Us
//           </h1>

//           <div className="grid md:grid-cols-2 gap-16">
//             {/* Left Column - Contact Info */}
//             <div className="space-y-10">
//               <div className="flex gap-6 items-start group">
//                 <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
//                   <Phone className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-700">Phone</p>
//                   <p className="text-gray-600">+234 812 345 6789</p>
//                 </div>
//               </div>

//               <div className="flex gap-6 items-start group">
//                 <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
//                   <Mail className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-700">Email</p>
//                   <p className="text-gray-600">hello@queenplate.com</p>
//                 </div>
//               </div>

//               <div className="flex gap-6 items-start group">
//                 <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
//                   <MapPin className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-700">Location</p>
//                   <p className="text-gray-600">12 Orion road Uyo, Akwa Ibom State.</p>
//                 </div>
//               </div>

//               <div className="flex gap-6 items-start group">
//                 <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
//                   <Clock className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-700">Hours</p>
//                   <p className="text-gray-600">Mon-Sun: 8AM - 10PM</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Contact Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
//                   required
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full px-6 py-4 rounded-2xl   border border-gray-200
//                    focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
//                   required
//                 />
//               </div>

//               <div>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Your message"
//                   rows={6}
//                   className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400 resize-y"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#A61E30] hover:from-[#c72e00] hover:to-[#e63900] text-white font-semibold py-4 rounded-2xl transition-all duration-300 active:scale-95 shadow-lg shadow-orange-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import { useState } from 'react';
import { motion } from "framer-motion";
import { Phone, Mail,  Clock } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! (Demo)');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#fff7e6] via-[#ffe4c4] to-[#ffd4a3] flex items-center justify-center p-6 font-sans"
    >
      <div className="w-full max-w-7xl overflow-hidden ">

        {/* Header */}
        <div className=" py-3 text-center">
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[#A61E30] text-sm mt-2 font-medium"
          >
            Get In Touch
          </motion.p>
        </div>

        <div className="p-10 md:p-16">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-tight"
          >
            Contact Us
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Left Column - Contact Info */}
            <div className="space-y-10">
              {[Phone, Mail, Clock].map((Icon, index) => {
                const content = [
                  ["Phone", "+234 8167934957"],
                  ["Email", "hello@queenplate.com"],
                  // ["Location", "12 Orion road Uyo, Akwa Ibom State."],
                  ["Hours", "Mon-Fri: 11AM - 5PM"],
                ];

                return (
                  <motion.div
                    key={index}
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -4 }}
                    className="flex gap-6 items-start group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    >
                      <Icon className="w-6 h-6 text-orange-600" />
                    </motion.div>

                    <div>
                      <p className="font-semibold text-gray-700">
                        {content[index][0]}
                      </p>
                      <p className="text-gray-600">
                        {content[index][1]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200
                   focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400 resize-y"
                  required
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#A61E30] hover:from-[#c72e00] hover:to-[#e63900] text-white font-semibold py-4 rounded-2xl transition-all duration-300 active:scale-95 shadow-lg shadow-orange-300"
              >
                Send Message
              </motion.button>

            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}