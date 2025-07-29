import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Hero.css";

export default function Hero() {
  const messages = [
    "2.5M+ Visitors Tracked",
    "1200+ Campaigns Automated",
    "300+ Active Brands",
    "Real-Time ROI Dashboard"
  ];

  const [currentMsg, setCurrentMsg] = useState(0);
  const messageRef = useRef(null);
  const barRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(messageRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          setCurrentMsg((prev) => (prev + 1) % messages.length);
          gsap.fromTo(
            messageRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${[80, 60, 90, 70][i]}%`,
          duration: 1 + i * 0.2,
          ease: "power2.out",
          delay: 0.2
        }
      );
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Section */}
        <div className="hero-left">
          <h1>
            Grow Smarter with <span>ADmyBRAND</span>
          </h1>
          <p>
            Automate your ad campaigns, visualize marketing metrics, and scale
            performance across all channels with powerful dashboards and
            reporting tools.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Book a Demo</button>
            <button className="btn-outline">See Pricing</button>
          </div>

          <div className="hero-info-card">
            <h3>Live Metrics</h3>
            <p ref={messageRef} className="live-text">
              {messages[currentMsg]}
            </p>
          </div>
        </div>

        {/* Right Section (Dashboard Visual) */}
        <div className="hero-dashboard">
          <div className="dashboard-header">
            <span>Dashboard</span>
            <div className="pulse" />
          </div>

          <div className="dashboard-bars">
            {[80, 60, 90, 70].map((val, i) => (
              <div
                key={i}
                className="dashboard-bar"
                ref={(el) => (barRefs.current[i] = el)}
              ></div>
            ))}
          </div>

          <div className="dashboard-cards">
            {[1, 2, 3].map((_, i) => (
              <div className="dashboard-card" key={i}>
                <span>Campaign #{100 + i}</span>
                <span className="positive">
                  +{Math.floor(Math.random() * 1000)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
