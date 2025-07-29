"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Riya Kapoor",
    role: "CMO, DigitAll",
    feedback:
      "ADmyBRAND helped us optimize our multi-channel campaigns and increased ROI by 45% in just 2 months.",
    image: "/assets/85.jpg",
  },
  {
    name: "Nikhil Mehta",
    role: "Marketing Head, BrandBooster",
    feedback:
      "The automation and real-time dashboard features are absolute game changers! Highly recommended.",
    image: "/assets/94.jpg",
  },
  {
    name: "Anjali Rao",
    role: "Growth Manager, WaveX",
    feedback:
      "Our team loves the simplicity and power of ADmyBRAND. Data-driven decisions are now a breeze!",
    image: "/assets/12.jpg",
  },
];

export default function Testimonials() {
  return (
  
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Real experiences from real marketers who scaled their growth with us.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="testimonial-card"
          >
            <div className="testimonial-user">
              <Image
                src={person.image}
                alt={person.name}
                width={50}
                height={50}
                className="testimonial-avatar"
              />
              <div>
                <h4 className="testimonial-name">{person.name}</h4>
                <p className="testimonial-role">{person.role}</p>
              </div>
            </div>
            <p className="testimonial-feedback">“{person.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
