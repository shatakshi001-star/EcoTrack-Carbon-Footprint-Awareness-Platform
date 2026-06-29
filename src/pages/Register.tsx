function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          Create Account
        </h1>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;