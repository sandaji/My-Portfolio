"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
};

const getVariants = (direction: AnimatedSectionProps["direction"]): Variants => {
  const distance = 50;
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case "up":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
    default:
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
  }
};

const AnimatedSection = ({
  children,
  delay = 0.1,
  direction = "up",
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
