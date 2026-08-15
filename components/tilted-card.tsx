"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import styles from "./tilted-card.module.css";

const spring = {
  damping: 28,
  stiffness: 180,
  mass: 0.8,
};

type TiltedCardProps = {
  children: ReactNode;
  captionText?: string;
  className?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
};

/**
 * A pointer-reactive wrapper for cards. It leaves the link inside the card as
 * the only interactive element, so the effect does not change navigation or
 * keyboard behavior.
 */
export default function TiltedCard({
  children,
  captionText = "",
  className = "",
  scaleOnHover = 1.025,
  rotateAmplitude = 7,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const scale = useSpring(1, spring);
  const captionOpacity = useSpring(0, { damping: 24, stiffness: 240 });
  const captionRotation = useSpring(0, {
    damping: 26,
    stiffness: 300,
    mass: 0.7,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
    captionRotation.set(-(offsetY - lastY.current) * 0.35);
    lastY.current = offsetY;
  }

  function handleMouseEnter() {
    if (reduceMotion) return;
    scale.set(scaleOnHover);
    captionOpacity.set(1);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    captionOpacity.set(0);
    captionRotation.set(0);
  }

  return (
    <div
      ref={cardRef}
      className={`${styles.figure} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={styles.inner}
        style={{ rotateX, rotateY, scale }}
      >
        {children}
      </motion.div>

      {captionText && (
        <motion.span
          aria-hidden="true"
          className={styles.caption}
          style={{
            x: pointerX,
            y: pointerY,
            opacity: captionOpacity,
            rotate: captionRotation,
          }}
        >
          {captionText}
        </motion.span>
      )}
    </div>
  );
}
