import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed w-72 h-72 rounded-full pointer-events-none z-50"
      style={{
        left: position.x - 144,
        top: position.y - 144,
        background:
          "radial-gradient(circle, rgba(34,197,94,0.25) 0%, rgba(34,197,94,0) 70%)",
        filter: "blur(50px)",
      }}
    />
  );
}

export default CursorGlow;