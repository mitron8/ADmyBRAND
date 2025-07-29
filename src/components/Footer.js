"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">ADmyBRAND</h3>
          <p className="text-sm text-gray-400">
            Revolutionizing marketing with data-driven automation and AI-powered insights.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#"><span className="hover:text-white">About Us</span></Link></li>
            <li><Link href="#"><span className="hover:text-white">Careers</span></Link></li>
            <li><Link href="#"><span className="hover:text-white">Blog</span></Link></li>
            <li><Link href="#"><span className="hover:text-white">Press</span></Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#"><span className="hover:text-white">Help Center</span></Link></li>
            <li><Link href="#"><span className="hover:text-white">API Docs</span></Link></li>
            <li><Link href="#"><span className="hover:text-white">Pricing</span></Link></li>
            <li><Link href="#"><span className="hover:text-white">Case Studies</span></Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-blue-500" />
              <a href="#" className="hover:text-white">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-sky-400" />
              <a href="#" className="hover:text-white">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-400" />
              <a href="#" className="hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>© 2025 ADmyBRAND. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
