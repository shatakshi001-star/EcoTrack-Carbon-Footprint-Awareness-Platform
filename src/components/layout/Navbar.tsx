import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-green-600"
        >
          🌍 EcoTrack
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-green-600 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            to="/tracker"
            className="hover:text-green-600 transition-colors duration-300"
          >
            Tracker
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-green-600 transition-colors duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/insights"
            className="hover:text-green-600 transition-colors duration-300"
          >
            Insights
          </Link>

          <Link
            to="/login"
            className="hover:text-green-600 transition-colors duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition-all duration-300"
          >
            Register
          </Link>
          <Link
  to="/leaderboard"
  className="hover:text-green-600 transition-colors duration-300"
>
  Leaderboard
</Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;