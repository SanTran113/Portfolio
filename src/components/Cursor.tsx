import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Check if the device is mobile or on web
function useHasFinePointer() {
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasFinePointer(mql.matches);

    const listener = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

  return hasFinePointer;
}

export default function Cursor() {
  const hasFinePointer = useHasFinePointer();
  const [isHovering, setIsHovering] = useState(false);
  const [isPressing, setIsPressing] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  //   cursor ring movement transition
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  // cursor dot movement transition
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 800 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 800 });

  //   Detecting movement and pressing
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const down = () => setIsPressing(true);
    const up = () => setIsPressing(false);

    // set hovering state
    const over = (e: MouseEvent) => {
      if ((e.target as Element).closest("[data-cursor-hover]")) {
        setIsHovering(true);
      }
    };
    const out = (e: MouseEvent) => {
      if ((e.target as Element).closest("[data-cursor-hover]")) {
        const related = e.relatedTarget as Element | null;
        if (!related || !related.closest("[data-cursor-hover]")) {
          setIsHovering(false);
        }
      }
    };

    const reset = () => {
      setIsHovering(false);
      setIsPressing(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    window.addEventListener("click", reset);
    window.addEventListener("pagehide", reset);
    document.addEventListener("visibilitychange", reset);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      window.removeEventListener("click", reset);
      window.removeEventListener("pagehide", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, [mouseX, mouseY]);

  // Return no cursor if the device is mobile
  if (!hasFinePointer) return null;

  return (
    <>
      {/* outer ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          borderRadius: "50%",
          border: "1px solid white",
          pointerEvents: "none",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPressing ? 40 : isHovering ? 40 : 25,
          height: isPressing ? 40 : isHovering ? 40 : 25,
          background: isPressing
            ? "transparent"
            : isHovering
              ? "rgba(255, 255, 255, 0.1)"
              : "transparent",
          mixBlendMode: isPressing
            ? "normal"
            : isHovering
              ? "difference"
              : "normal",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* center dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          width: 3,
          height: 3,
          borderRadius: "50%",
          background: "white",
          pointerEvents: "none",
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
