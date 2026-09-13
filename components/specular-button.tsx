"use client";

import {
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { useDeferredVisual } from "@/components/use-deferred-visual";
import styles from "./specular-button.module.css";

type SpecularButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick"> & {
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | "custom";
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const SpecularButton = forwardRef<HTMLButtonElement, SpecularButtonProps>(function SpecularButton({
  children = "Get Started",
  size = "lg",
  radius = 18,
  tint = "#ffffff",
  tintOpacity = 0,
  blur = 0,
  textColor = "#f5f5f5",
  lineColor = "#ffffff",
  baseColor = "#525252",
  intensity = 1.2,
  shineSize = 10,
  shineFade = 40,
  thickness = 1.2,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  disabled = false,
  onClick,
  className = "",
  type = "button",
  style,
  ...buttonProps
}: SpecularButtonProps, forwardedRef) {
  const ready = useDeferredVisual();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fxRef = useRef<HTMLSpanElement>(null);
  const propsRef = useRef({
    radius,
    lineColor,
    baseColor,
    intensity,
    shineSize,
    shineFade,
    thickness,
    speed,
    followMouse,
    proximity,
    autoAnimate,
  });

  propsRef.current = {
    radius,
    lineColor,
    baseColor,
    intensity,
    shineSize,
    shineFade,
    thickness,
    speed,
    followMouse,
    proximity,
    autoAnimate,
  };

  useImperativeHandle(forwardedRef, () => buttonRef.current as HTMLButtonElement, []);

  useEffect(() => {
    const button = buttonRef.current;
    const fx = fxRef.current;
    // Pointer shine has no interaction to follow on touchscreens.
    if (!ready || !button || !fx || window.matchMedia("(pointer: coarse)").matches) return;

    let disposed = false;
    let started = false;
    let cleanup: (() => void) | undefined;
    const initialize = () => {
      if (started) return;
      started = true;
      import("./specular-button-effect").then(({ createSpecularEffect }) => {
        if (!disposed) cleanup = createSpecularEffect(button, fx, propsRef);
      }).catch(() => { /* The CSS border remains if WebGL or the chunk is unavailable. */ });
    };
    const onPointerMove = (event: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      const distance = Math.hypot(
        Math.max(rect.left - event.clientX, 0, event.clientX - rect.right),
        Math.max(rect.top - event.clientY, 0, event.clientY - rect.bottom),
      );
      if (distance <= propsRef.current.proximity) initialize();
    };
    if (autoAnimate) initialize();
    else window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      disposed = true;
      window.removeEventListener("pointermove", onPointerMove);
      cleanup?.();
    };
  }, [ready, autoAnimate]);

  const componentStyle = {
    "--sb-radius": `${radius}px`,
    "--sb-tint": tint,
    "--sb-tint-opacity": tintOpacity,
    "--sb-blur": `${blur}px`,
    "--sb-text-color": textColor,
    "--sb-base-color": baseColor,
    ...style,
  } as CSSProperties;

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${size === "custom" ? styles.custom : styles[`size-${size}`]}${className ? ` ${className}` : ""}`}
      style={componentStyle}
    >
      <span ref={fxRef} className={styles.fx} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
    </button>
  );
});

SpecularButton.displayName = "SpecularButton";

export default SpecularButton;
