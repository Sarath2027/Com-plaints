import { useState } from "react";

export default function ComplaintCard({ title, desc }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 
                      hover:scale-105 hover:shadow-2xl transition-all duration-300">

        <h6 className="text-2xl font-semibold mb-5 text-white">{title}</h6>

        <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-2 rounded-full 
                     bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
                     text-white font-semibold shadow-lg 
                     hover:scale-110 hover:shadow-2xl 
                     transition-all duration-300"
        >
          Resolve ✅
        </button>
      </div>

      {/* Stylish Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center 
                        bg-black/60 backdrop-blur-sm z-50">

          <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700
                          p-8 rounded-3xl shadow-2xl text-center 
                          slow-jump">

            <h3 className="text-2xl font-bold text-white mb-4">
              Ni valla Kadh le Annayyaa 😂
            </h3>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 rounded-full bg-white text-purple-700 
                         font-semibold hover:scale-105 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}