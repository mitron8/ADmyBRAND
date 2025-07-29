"use client";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Starter",
    price: "$29",
    features: [
      "Up to 10 campaigns",
      "Basic Analytics",
      "Email Support",
      "Access to Dashboard"
    ],
    highlight: false
  },
  {
    title: "Growth",
    price: "$99",
    features: [
      "Unlimited Campaigns",
      "Advanced Analytics",
      "Dedicated Manager",
      "Priority Support"
    ],
    highlight: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Custom Integrations",
      "API Access",
      "White Label Option",
      "24/7 Support"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section className="bg-[#0F172A] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Flexible Pricing</h2>
        <p className="text-gray-400">Choose a plan that fits your brand and budget. Scale anytime.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`rounded-xl p-8 shadow-xl border border-gray-700 bg-[#1E293B] ${
              plan.highlight ? "ring-2 ring-brand scale-105" : ""
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
            <p className="text-3xl font-semibold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-sm text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-brand text-white py-2 rounded-md hover:bg-purple-600 transition">
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
