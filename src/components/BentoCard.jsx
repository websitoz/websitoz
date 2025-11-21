import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon = false,
}) => {
  const hoverRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // prevent right-click on videos
  useEffect(() => {
    const el = hoverRef.current;
    if (!el) return;
    const handleContext = (e) => e.preventDefault();
    el.addEventListener("contextmenu", handleContext);
    return () => el.removeEventListener("contextmenu", handleContext);
  }, []);

  const handleHoverMove = (e) => {
    const el = hoverRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative size-full min-h-[22rem] w-full overflow-hidden rounded-xl bg-black text-white">

      {/* Background Layer */}
      {src ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 opacity-80" />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-6">
        <div>
          <h3 className="bento-title special-font text-2xl md:text-4xl font-semibold leading-tight">
            {title}
          </h3>

          {description && (
            <p className="mt-3 max-w-prose text-sm md:text-base text-white/80">
              {description}
            </p>
          )}
        </div>

        {/* Button / Coming Soon */}
        {isComingSoon && (
          <div
            ref={hoverRef}
            className="relative z-20 mt-4 inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase text-white/80 backdrop-blur-sm"
            onMouseMove={handleHoverMove}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* radial hover glow */}
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300"
              style={{
                opacity: hover ? 1 : 0,
                background: `radial-gradient(140px circle at ${cursor.x}px ${cursor.y}px, rgba(101,111,226,0.22), rgba(0,0,0,0.2))`,
              }}
            ></div>

            <TiLocationArrow className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Explore</span>
          </div>
        )}
      </div>
    </div>
  );
};
