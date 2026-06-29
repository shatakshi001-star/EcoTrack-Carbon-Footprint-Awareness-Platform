import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-blue-100 relative overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Login Card */}
      <div className="z-10 w-full max-w-md bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl">

        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🌍</div>

          <h1 className="text-4xl font-bold text-green-700">
            Welcome Back
          </h1>

          <p className="text-gray-600 mt-2">
            Sign in to continue your sustainability journey
          </p>
        </div>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            className="w-full bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-semibold"
          >
            Register
          </Link>
        </p>

      </div>
      
    </div>
  );
}

export default Login;