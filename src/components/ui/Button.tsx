interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
}

function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`
        px-6 py-3 rounded-xl
        transition-all duration-300
        hover:scale-105
        hover:shadow-2xl
        active:scale-95

        ${
          variant === "primary"
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
        }
      `}
    >
      {text}
    </button>
  );
}

export default Button;