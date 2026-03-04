import { useState, useEffect } from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.jpg";
import ComplaintCard from "./ComplaintCard";
export default function Complaints() {
  const images = [img1, img2, img3];
const [isLandscape, setIsLandscape] = useState(
  window.innerWidth > window.innerHeight
);

useEffect(() => {
  const handleResize = () => {
    setIsLandscape(window.innerWidth > window.innerHeight);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Continuous Sliding Background */}
      <div className="absolute inset-0 flex animate-slide">

        {[...images, ...images].map((img, index) => (
           <div
    key={index}
    className="min-w-full bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: isLandscape ? "100% 100%" : "cover",
    }}
  />
        ))}

      </div>

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 p-6 text-white">

        <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-400 mb-10">
          📋 Complaints Dashboard
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ComplaintCard title="Internet Issue" desc="Speed is too slow 📶" icon="🌐" />
          <ComplaintCard title="Water Problem" desc="Block A supply delay 💧" icon="🚰" />
          <ComplaintCard title="Street Light" desc="Lights not working 💡" icon="🏮" />
          <ComplaintCard title="Garbage Delay" desc="Collection late 🗑️" icon="♻️" />
          <ComplaintCard title="Noise Issue" desc="Disturbance at night 🔊" icon="🚨" />
        </div>

      </div>
    </div>
  );
}