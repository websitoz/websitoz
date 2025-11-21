import { useRef, useEffect, useState } from "react";

export const BentoTilt = ({ children, className = "", maxTilt = 10 }) => {
  const itemRef = useRef(null);
  const frame = useRef(null);

  const [transform, setTransform] = useState("");

  useEffect(() => {
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const handleMove = (e) => {
    const el = itemRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0 → 1
    const y = (e.clientY - rect.top) / rect.height;  // 0 → 1

    const tiltX = (y - 0.5) * maxTilt;  // rotateX
    const tiltY = (0.5 - x) * maxTilt;  // rotateY

    const newTransform = `
      perspective(900px)
      rotateX(${tiltX}deg)
      rotateY(${tiltY}deg)
      scale3d(0.98, 0.98, 0.98)
    `;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setTransform(newTransform);
    });
  };

  const handleLeave = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setTransform("");
    });
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform }}
      className={`will-change-transform transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
};
