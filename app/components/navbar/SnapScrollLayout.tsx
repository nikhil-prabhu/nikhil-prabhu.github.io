import { useEffect, useRef } from "react";
import { Outlet } from "@remix-run/react";
import { motion, useAnimation } from "framer-motion";

export default function SnapScrollLayout() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  // TODO: make animations smoother
  useEffect(() => {
    // FIXME: fix jitter on multiple keypress
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const scrollAmount = window.innerHeight;

      if (e.key === "ArrowDown") {
        controls.start({
          y: `-=${scrollAmount}`,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        });
      } else if (e.key === "ArrowUp") {
        controls.start({
          y: `+=${scrollAmount}`,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        });
      }
    };

    // FIXME: fix wheel-scroll animation not working
    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const scrollAmount = window.innerHeight;
      if (e.deltaY > 0) {
        controls.start({
          y: `-=${scrollAmount}`,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        });
      } else {
        controls.start({
          y: `+=${scrollAmount}`,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    containerRef.current?.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [controls]);

  return (
    <motion.div
      className="font-sans h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide m-0"
      ref={containerRef}
      animate={controls}
      initial={{ y: 0 }}
    >
      <Outlet />
    </motion.div>
  );
}
