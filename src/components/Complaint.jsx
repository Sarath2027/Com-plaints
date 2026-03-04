import { useState, useEffect } from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.jpg";
import ComplaintCard from "./ComplaintCard";
export default function Complaints() {
  const images = [img1, img2, img3,img4];
 const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Slider */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 p-6 text-white">

        <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-400 mb-6">
          📋 Complaints Dashboard
        </h1>

        {/* 🔥 Add Complaint Button */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setShowPopup(true)}
            className="px-8 py-3 rounded-full text-lg font-semibold 
                       bg-gradient-to-r from-red-500 via-pink-500 to-purple-600
                       hover:scale-110 transition-all duration-300
                       shadow-2xl hover:shadow-red-500/50"
          >
            ➕ Add Complaint
          </button>
        </div>

        {/* Complaint Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ComplaintCard title="Excitement tho cheppinadanni or Chesinadanni Disappoint ayyela cheyadam lo PhD chesadu" />
          <ComplaintCard title="Podduna pettina message ki night ki reply ivvadam" />
          <ComplaintCard title="Photo Digudham ante Lag Lag" />
          <ComplaintCard title="Emotional ga cheppina vatiki kuda Emoji's tho reaction 😆" />
          <ComplaintCard title="Story/Status/Comment ki Like kuda kottadu " />
          <ComplaintCard title="Nenu Ground ki pilisthe ekkada leni manchu problem vasthadhi" />
        </div>
      </div>

      {/* 😆 Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center 
                        bg-black/70 backdrop-blur-md z-50">

          <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600
                          text-black p-10 rounded-3xl shadow-2xl 
                          text-center max-w-md slow-jump">

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Nuvve Kada Anna Culprit....<br />
              Inka Malli NUV complaint ivvadam enduku.. 😂
            </h2>

            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 rounded-full bg-black text-white
                         hover:scale-105 transition"
            >
              Close 😅
            </button>

          </div>
        </div>
      )}
    </div>
  );
}