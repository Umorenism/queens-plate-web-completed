import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';

export default function PrivatePolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#9C1E2E]">Personal Information:</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Full name, Phone number, and Email address</li>
              <li>Delivery address</li>
              <li>Payment information (processed securely via third-party providers)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#9C1E2E]">Non-Personal Information:</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Device type and browser</li>
              <li>IP address and Usage data (pages visited, time spent, etc.)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <ul className="list-disc ml-5 text-gray-700">
          <li>Process and deliver your orders</li>
          <li>Communicate order updates and customer support</li>
          <li>Improve our services and user experience</li>
          <li>Send promotional offers (only if you opt in)</li>
          <li>Prevent fraud and enhance security</li>
        </ul>
      )
    },
    {
      title: "3. Sharing Your Information",
      content: "We may share your information with delivery personnel, restaurant partners, payment processors, and service providers (e.g., analytics, hosting). We do not sell your personal information to third parties."
    },
    {
      title: "4. Data Security",
      content: "We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. However, no system is completely secure."
    },
    {
      title: "5. Your Rights",
      content: "You may have the right to access, correct, or delete your personal data and opt out of marketing communications."
    },
    {
      title: "6. Cookies and Tracking Technologies",
      content: "We may use cookies to enhance user experience, analyze traffic, and personalize content."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#fff7e6] via-[#ffe4c4] to-[#ffd4a3] py-20 px-6 font-sans"
    >
      <div className="max-w-7xl mt-20 mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50">
        
        {/* Header Section */}
        <div className="p-8 md:p-12 bg-[#9C1E2E] text-white text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center mb-4"
          >
            <ShieldCheck size={48} className="text-[#D4AF37]" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <Clock size={16} />
            <span>Effective Date: 26th April, 2026</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-12">
          <section className="text-gray-700 leading-relaxed italic border-l-4 border-[#D4AF37] pl-4">
            Queen’s Plate operates a food delivery service. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, or services.
          </section>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
                <div className="text-gray-600 leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <hr className="border-gray-200" />

          {/* Contact Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#fff9f0] p-6 rounded-2xl border border-[#ffe4c4]"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">10. Contact Us</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-[#9C1E2E] rounded-full flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400">Email</p>
                  <p className="font-medium">queensplate@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-[#9C1E2E] rounded-full flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400">Phone</p>
                  <p className="font-medium">08167934957</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700 md:col-span-2">
                <div className="w-10 h-10 bg-[#9C1E2E] rounded-full flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400">Address</p>
                  <p className="font-medium">Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-50 p-6 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} Queen's Plate. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
}