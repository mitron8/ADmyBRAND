"use client";
import { motion } from "framer-motion";


import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Features from "../components/Features";



import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="bg-dark text-white">
      
      <div className="flex" id="main1">
        <Sidebar />
        <main className=" md:px-4" id="heromain">
          <Hero />
          <Features />
          <Dashboard/>
          

          
          <Pricing />
          <Testimonials />
          <Footer />
        </main>
      </div>
    </div>
  );
}