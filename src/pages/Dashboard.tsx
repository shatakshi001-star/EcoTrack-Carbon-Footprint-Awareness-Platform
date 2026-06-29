import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { getRecommendation } from "../utils/recommendations";
function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("carbonData");

    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl text-red-500">
          No activity data found.
        </h2>
      </div>
    );
  }

  const chartData = [
    {
      name: "Transport",
      value: Number(data.transportKm) * 0.21,
    },
    {
      name: "Electricity",
      value: Number(data.electricityKwh) * 0.85,
    },
    {
      name: "Waste",
      value: Number(data.wasteKg) * 0.5,
    },
  ];

  const COLORS = ["#16a34a", "#3b82f6", "#f97316"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-8">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        Sustainability Dashboard 📊
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">
            Total Carbon
          </h3>

          <p className="text-3xl text-green-700 font-bold">
            {data.carbon} kg CO₂
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">
            Water Usage
          </h3>

          <p className="text-3xl text-blue-500 font-bold">
            {data.waterUsage} L
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl mt-8">
  <h2 className="text-2xl font-bold mb-4">
    AI Recommendations 🤖
  </h2>

  <p>
    {getRecommendation(data.carbon)}
  </p>
</div>
        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
  <h3 className="text-xl font-semibold mb-2">
    Sustainability Rating
  </h3>

  <p className="text-3xl">
    {data.carbon < 10
      ? "🟢 Excellent"
      : data.carbon < 20
      ? "🟡 Moderate"
      : "🔴 High"}
  </p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-xl mt-8">
  <h2 className="text-2xl font-bold mb-4">
    AI Sustainability Recommendations 🤖
  </h2>

  <p className="text-lg text-gray-700">
    {getRecommendation(Number(data.carbon))}
  </p>
</div>

        <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">
            Electricity Usage
          </h3>

          <p className="text-3xl text-yellow-500 font-bold">
            {data.electricityKwh} kWh
          </p>
        </div>

      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl flex justify-center">
        <PieChart width={450} height={350}>
          <Pie
            data={chartData}
            cx={225}
            cy={170}
            outerRadius={120}
            dataKey="value"
            label
          >
            {chartData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>

    </div>
  );
}

export default Dashboard;