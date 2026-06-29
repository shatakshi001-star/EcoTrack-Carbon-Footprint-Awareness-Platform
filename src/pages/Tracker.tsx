import { useState } from "react";
import { calculateCarbonFootprint } from "../utils/carbonCalculator";
import toast from "react-hot-toast";
function Tracker() {
  const [formData, setFormData] = useState({
    transportKm: "",
    electricityKwh: "",
    waterUsage: "",
    wasteKg: "",
    diet: "vegetarian",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validation
  if (
    !formData.transportKm ||
    !formData.electricityKwh ||
    !formData.waterUsage ||
    !formData.wasteKg
  ) {
   toast.error("Please fill all fields!");
    return;
  }

  const carbon = calculateCarbonFootprint({
    transportKm: Number(formData.transportKm),
    electricityKwh: Number(formData.electricityKwh),
    waterUsage: Number(formData.waterUsage),
    wasteKg: Number(formData.wasteKg),
    diet: formData.diet,
  });

  // Save data in localStorage
 const previousData =
  JSON.parse(localStorage.getItem("carbonHistory") || "[]");

previousData.push({
  ...formData,
  carbon,
  date: new Date().toLocaleDateString(),
});

localStorage.setItem(
  "carbonHistory",
  JSON.stringify(previousData)
);

 toast.success("Data saved successfully!");
};
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Daily Activity Tracker 🌍
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Transport Distance (km)
            </label>

            <input
              type="number"
              name="transportKm"
              value={formData.transportKm}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Enter distance travelled"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Electricity Usage (kWh)
            </label>

            <input
              type="number"
              name="electricityKwh"
              value={formData.electricityKwh}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Enter electricity usage"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Water Usage (Litres)
            </label>

            <input
              type="number"
              name="waterUsage"
              value={formData.waterUsage}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Enter water consumption"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Waste Generated (kg)
            </label>

            <input
              type="number"
              name="wasteKg"
              value={formData.wasteKg}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Enter waste generated"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Diet Type
            </label>

            <select
              name="diet"
              value={formData.diet}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">
                Non-Vegetarian
              </option>
              <option value="vegan">Vegan</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Save Activity
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tracker;