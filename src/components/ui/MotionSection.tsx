"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function MotionSection({ children, className, style }: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
