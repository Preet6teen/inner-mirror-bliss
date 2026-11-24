import { type Variants, type Transition } from "motion/react";

export const smoothEase: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth, graceful feel
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

// 1. fadeUp
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// 2. fadeIn
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: "easeOut",
    },
  }),
};

// 3. slideLeft
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// 4. slideRight
export const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// 5. scaleIn
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: customDelay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// 6. staggerContainer
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

// 7. staggerItem
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 8. floating (Subtle spiritual float)
export const floating: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-4, 4, -4],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// 9. imageReveal (Curtain / scale clip reveal)
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 10. softParallax helper
export const softParallax = (factor: number = 10) => ({
  initial: { y: 0 },
  whileHover: { y: -factor, transition: { duration: 0.3, ease: "easeOut" } },
});
