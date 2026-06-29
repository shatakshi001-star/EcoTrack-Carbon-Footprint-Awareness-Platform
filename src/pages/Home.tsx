import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { FaLeaf, FaChartPie, FaFilePdf } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col justify-center items-center text-center px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-20"></div>

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

        {/* Hero Section */}
        <div className="z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Track Your Carbon Footprint 🌍
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Measure your environmental impact, discover sustainable habits,
            and make smarter choices for a greener future.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button text="Get Started 🚀" />
            </Link>

            <Link to="/tracker">
              <Button text="Track Now 📊" variant="secondary" />
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-6xl z-10">

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
            <FaLeaf className="text-5xl text-green-600 mb-4 mx-auto" />

            <h3 className="text-2xl font-bold mb-3">
              Sustainable Living
            </h3>

            <p className="text-gray-600">
              Learn eco-friendly habits and reduce your carbon footprint.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
            <FaChartPie className="text-5xl text-blue-600 mb-4 mx-auto" />

            <h3 className="text-2xl font-bold mb-3">
              Smart Analytics
            </h3>

            <p className="text-gray-600">
              Visualize your environmental impact with charts and insights.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
            <FaFilePdf className="text-5xl text-red-600 mb-4 mx-auto" />

            <h3 className="text-2xl font-bold mb-3">
              Download Reports
            </h3>

            <p className="text-gray-600">
              Generate detailed PDF reports to track your sustainability journey.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;