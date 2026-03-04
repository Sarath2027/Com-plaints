import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder="Enter Password"
        className="w-full px-4 py-3 pr-12 rounded-xl 
                   bg-white/10 backdrop-blur-md 
                   border border-white/20 
                   text-white placeholder-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      {/* EYE ICON FIXED */}
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 
                   bg-transparent p-0 m-0 
                   outline-none border-none 
                   text-gray-300 hover:text-white"
        style={{ background: "transparent" }}
      >
        {show ? <Eye size={20} /> : <EyeOff size={20} />}
      </button>
    </div>
  );
}