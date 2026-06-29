import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import Home from "../pages/Home";
import { ThemeProvider } from "../context/ThemeContext";
import { motion } from "framer-motion";

<motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="min-h-screen flex flex-col justify-center items-center text-center px-6"
>
  {/* Existing Home Content */}
</motion.section>
describe("Home Page", () => {
  it("renders homepage heading", () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(
      screen.getByText(/Track Your Carbon Footprint/i)
    ).toBeInTheDocument();
  });
});