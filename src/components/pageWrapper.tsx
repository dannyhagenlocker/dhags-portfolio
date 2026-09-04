// components/PageWrapper.tsx
import { motion } from "framer-motion";
import type { TransitionDirection } from "../hooks/useTransitionDirection";

const transition = { duration: 0.3 };

// Offsets are percentages of the page's own width so the slide reaches the
// edge of the viewport at every screen size.
const offscreen = (direction: number) => (direction > 0 ? "100%" : "-100%");

const variants = {
  // The incoming page enters from the side we are travelling towards...
  initial: (direction: TransitionDirection) => ({
    x: direction === 0 ? 0 : offscreen(direction),
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition,
  },
  // ...and the outgoing page leaves through the opposite side, so the two
  // pages move together instead of chasing each other off the same edge.
  exit: (direction: TransitionDirection) => ({
    x: direction === 0 ? 0 : offscreen(-direction),
    opacity: 0,
    transition,
  }),
};

export default function PageWrapper({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: TransitionDirection;
}) {
  return (
    <motion.div
      className="absolute w-full"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
    >
      {children}
    </motion.div>
  );
}
