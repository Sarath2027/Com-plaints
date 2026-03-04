export default function ComplaintCard({ title, desc, icon }) {
  return (
    <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 hover:shadow-2xl transition duration-300">

      <div className="text-5xl mb-4">{icon}</div>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-300 mb-4">{desc}</p>

      <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition">
        View Details →
      </button>
    </div>
  );
}