function Leaderboard() {
  const users = [
    { name: "Shatakshi", carbon: 8.5 },
    { name: "Aman", carbon: 10.2 },
    { name: "Priya", carbon: 12.1 },
  ];

  users.sort((a, b) => a.carbon - b.carbon);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-8">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        Sustainability Leaderboard 🏆
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl">

        {users.map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-4"
          >
            <div>
              <h2 className="text-xl font-semibold">
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : "🥉"}{" "}
                {user.name}
              </h2>
            </div>

            <p className="text-lg text-green-700 font-bold">
              {user.carbon} kg CO₂
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Leaderboard;