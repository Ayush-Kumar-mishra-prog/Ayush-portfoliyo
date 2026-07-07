import { useEffect, useState } from "react";
import { motion as Motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 450, damping: 32 });
  const springY = useSpring(cursorY, { stiffness: 450, damping: 32 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    const moveCursor = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);

      const target = event.target;
      setIsPointer(
        Boolean(target.closest("a, button, input, textarea, select, [role='button']"))
      );
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <Motion.div
        aria-hidden="true"
        className="cursor-orb"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.8 : 1,
        }}
      />
      <Motion.div
        aria-hidden="true"
        className="cursor-dot"
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
};

export default AnimatedCursor;
