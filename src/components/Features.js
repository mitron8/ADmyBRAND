"use client";
import { motion } from "framer-motion";
import { BarChart, Rocket, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Rocket className="text-brand w-8 h-8" />,
    title: "Campaign Automation",
    desc: "Launch and manage campaigns across platforms without lifting a finger."
  },
  {
    icon: <BarChart className="text-brand w-8 h-8" />,
    title: "Analytics Dashboard",
    desc: "Real-time visual insights from all your ad channels in one place."
  },
  {
    icon: <Zap className="text-brand w-8 h-8" />,
    title: "AI Optimization",
    desc: "Let machine learning optimize your ads and budget for performance."
  },
  {
    icon: <ShieldCheck className="text-brand w-8 h-8" />,
    title: "Brand Protection",
    desc: "Ensure compliance and prevent brand misrepresentation automatically."
  }
];

export default function Features() {
  return (
    <section className="bg-[#0F172A] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ADmyBRAND?</h2>
        <p className="text-gray-400">Empowering marketers with intelligence, automation, and scale.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
