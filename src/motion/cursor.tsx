import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressing, setIsPressing] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const down = () => setIsPressing(true);
    const up = () => setIsPressing(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        width: 20,
        height: 20,
        borderRadius: "50%",
        borderWidth: 1,
        borderColor: "white",
        background: "none",
        pointerEvents: "none",
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isPressing ? 30 : isHovering ? 40 : 20,
        height: isPressing ? 30 : isHovering ? 40 : 20,
        background: isPressing ? "white" : isHovering ? "white" : "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
