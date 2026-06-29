import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-8xl font-bold text-green-700">404</h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-4">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;