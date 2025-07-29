"use client";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  DollarSign,
  Info,
  LayoutDashboard
} from "lucide-react";
import Link from "next/link";

export default function SidebarNavbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { icon: <Home size={18} />, label: "Home", href: "#" },
    { icon: <LayoutDashboard size={18} />, label: "Product", href: "#product" },
    { icon: <DollarSign size={18} />, label: "Pricing", href: "#pricing" },
    { icon: <Info size={18} />, label: "About", href: "#about" }
  ];

  return (
    <div className="relative">
 {/* Toggle Button (top-right on mobile only) */}
<button
  onClick={() => setOpen(!open)}
  className="fixed top-3 right-12 z-50 bg-[#0F172A] text-white p-2 rounded-md border border-gray-700 md:hidden"
>
  {open ? <X size={24} /> : <Menu size={24} />}
</button>



      {/* Sidebar - slide in/out from left */}
      <aside
        className={`fixed top-0 left-0 h-screen w-60 bg-[#0F172A] border-r border-gray-700 p-6 pt-20 text-white z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="flex items-center gap-2 hover:text-brand transition"
                onClick={() => setOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Transparent top navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#0F172A]/80 backdrop-blur-md text-white flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">ADmyBRAND</h1>
        {/* Leave empty space for alignment, or add links here */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link, i) => (
            <a key={i} href={link.href} className="hover:text-brand transition">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main content wrapper */}
      <main className="pt-24 px-6">{/* Your content goes here */}</main>
    </div>
  );
}
