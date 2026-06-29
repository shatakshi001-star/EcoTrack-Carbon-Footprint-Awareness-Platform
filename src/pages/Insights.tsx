function Insights() {
  const recommendations = [
    "🚶 Walk or cycle for short distances.",
    "💡 Switch to LED bulbs to reduce electricity consumption.",
    "🚿 Reduce shower time to save water.",
    "♻️ Recycle waste and avoid single-use plastics.",
    "🥗 Prefer a plant-based diet whenever possible.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Sustainability Insights 🌱
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">
          Personalized Recommendations
        </h2>

        <ul className="space-y-4">
          {recommendations.map((item, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg bg-green-50"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Insights;