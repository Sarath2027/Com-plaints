import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function SuccessPopup({ show, onContinue }) {
  const [seconds, setSeconds] = useState(5);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!show) return;

    setSeconds(5);
    setEnabled(false);

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setEnabled(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/90 z-50 text-center px-4">

      {/* 🎉 Confetti */}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={600}
        gravity={0.3}
        recycle={false}
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
        🎉 Great! Continue to see complaints 🎉
      </h1>

      {/* Countdown */}
      {!enabled && (
        <p className="text-lg text-gray-300 mb-4">
          Please wait {seconds} seconds...
        </p>
      )}

      {/* Continue Button */}
      <button
        onClick={onContinue}
        disabled={!enabled}
        className={`px-8 py-4 rounded-2xl text-lg font-semibold transition 
          ${
            enabled
              ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105"
              : "bg-gray-600 cursor-not-allowed opacity-60"
          }`}
      >
        {enabled ? "Continue →" : "Celebrating 🎊"}
      </button>
    </div>
  );
}