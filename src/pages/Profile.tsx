function Profile() {
  const data = JSON.parse(
    localStorage.getItem("carbonData") || "{}"
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          User Profile 👤
        </h1>

        <div className="space-y-4 text-lg">
          <div className="border-b pb-3">
            <strong>Transport Distance:</strong>{" "}
            {data.transportKm || 0} km
          </div>

          <div className="border-b pb-3">
            <strong>Electricity Usage:</strong>{" "}
            {data.electricityKwh || 0} kWh
          </div>

          <div className="border-b pb-3">
            <strong>Water Usage:</strong>{" "}
            {data.waterUsage || 0} Litres
          </div>

          <div className="border-b pb-3">
            <strong>Waste Generated:</strong>{" "}
            {data.wasteKg || 0} kg
          </div>

          <div className="border-b pb-3">
            <strong>Diet Type:</strong>{" "}
            {data.diet || "Not Selected"}
          </div>

          <div className="border-b pb-3">
            <strong>Total Carbon Footprint:</strong>{" "}
            {data.carbon || 0} kg CO₂
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;