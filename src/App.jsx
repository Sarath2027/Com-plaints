import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import SuccessPopup from "./components/SuccessPopup";
import ComplaintCard from "./components/ComplaintCard";
import Complaint from "./components/Complaint";
export default function App() {
  const [step, setStep] = useState("welcome");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleLogin = () => {
    if (password === "Anna143Vadina") {
      setShowPopup(true);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white">

      {/* WELCOME */}
      {step === "welcome" && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            👑 Welcome Anna 👑
          </h1>

          <button
            onClick={() => setStep("login")}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition text-lg font-semibold"
          >
            Proceed 🚀
          </button>
        </div>
      )}

      {/* LOGIN */}
      {step === "login" && (
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center text-orange-400 mb-6">
              🔐 Secure Login
            </h2>

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition font-semibold"
            >
              Login 🚀
            </button>
          </div>

          <SuccessPopup
            show={showPopup}
            onContinue={() => {
              setShowPopup(false);
              setStep("complaints");
            }}
          />
          {showError && (
          <div className="fixed inset-0 flex items-center justify-center 
                          bg-black/70 backdrop-blur-md z-50">

            <div className="bg-gradient-to-br from-red-500 via-pink-600 to-purple-700
                            p-8 rounded-3xl shadow-2xl text-center 
                            max-w-sm w-full mx-4 animate-pulse">

              <h2 className="text-2xl font-bold text-white mb-4">
                ❌ Wrong Password!
              </h2>

              <p className="text-gray-200 mb-6">
                Anna... Password marchipoyava? Guess Chey chey😅
              </p>

              <button
                onClick={() => setShowError(false)}
                className="px-6 py-2 rounded-full bg-white text-red-600 
                          font-semibold hover:scale-105 transition"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
      )}

      {/* COMPLAINTS */}
      {step === "complaints" && (
        <Complaint/>)}
    </div>
  );
}