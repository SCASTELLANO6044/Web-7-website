"use client";

import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import styles from "./topography.module.css";

type ColorMode = "elevation" | "uniform" | "alternating";

interface TopographyProps {
    lowColor?: string;
    midColor?: string;
    highColor?: string;
    speed?: number;
    morphAmount?: number;
    morphSpeed?: number;
    bands?: number;
    thickness?: number;
    scale?: number;
    pixelSize?: number;
    glow?: number;
    colorMode?: ColorMode;
    contrast?: number;
    brightness?: number;
    fillBands?: boolean;
    opacity?: number;
    grain?: boolean;
    grainIntensity?: number;
    mouseInteraction?: boolean;
    mouseRadius?: number;
    mouseStrength?: number;
    className?: string;
}

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) return [1, 1, 1];

    return [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
    ];
};

const colorModeToFloat = (mode: ColorMode) => {
    if (mode === "uniform") return 1;
    if (mode === "alternating") return 2;
    return 0;
};

const vertex = `#version 300 es
in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragment = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float uMorphAmount;
uniform float uBands;
uniform float uThickness;
uniform float uScale;
uniform float uPixelSize;
uniform float uGlow;
uniform float uColorMode;
uniform float uContrast;
uniform float uBrightness;
uniform float uFillBands;
uniform float uOpacity;
uniform vec3 uLow;
uniform vec3 uMid;
uniform vec3 uHigh;
uniform vec2 uMouse;
uniform float uMouseEnabled;
uniform float uMouseRadius;
uniform float uMouseStrength;
uniform float uMouseActive;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec4 uCtrlA;
uniform vec4 uCtrlB;
uniform vec4 uCtrlC;
uniform vec4 uCtrlD;

out vec4 fragColor;

float bez(float t, vec4 c) {
    float w = 6.2831853 * t;
    return 0.5 * (c.x * sin(w) + c.y * cos(w) + c.z * sin(2.0 * w) + c.w * cos(2.0 * w));
}

float field(vec2 uv) {
    vec2 a = vec2(bez(uv.x, uCtrlA), bez(uv.x, uCtrlB));
    vec2 b = vec2(bez(uv.y, uCtrlC), bez(uv.y, uCtrlD));
    return distance(a, b);
}

vec3 elevationColor(float elevation) {
    vec3 color = mix(uLow, uMid, smoothstep(0.0, 0.5, elevation));
    return mix(color, uHigh, smoothstep(0.5, 1.0, elevation));
}

void main() {
    vec2 resolution = iResolution.xy;
    vec2 uv = gl_FragCoord.xy / resolution;
    vec2 scaledUv = (uv - 0.5) / max(uScale, 0.001) + 0.5;
    vec2 sampleUv = scaledUv;

    if (uPixelSize > 1.0) {
        vec2 pixelResolution = resolution / uPixelSize;
        sampleUv = (floor(scaledUv * pixelResolution) + 0.5) / pixelResolution;
    }

    float fieldValue = field(sampleUv);

    if (uMouseEnabled > 0.5) {
        vec2 distanceToMouse = uv - uMouse;
        distanceToMouse.x *= resolution.x / max(resolution.y, 1.0);
        float radius = max(uMouseRadius, 0.001);
        fieldValue += exp(-dot(distanceToMouse, distanceToMouse) / (radius * radius)) * uMouseStrength * uMouseActive;
    }

    float bands = fieldValue * uBands;
    float lineDistance = min(fract(bands), 1.0 - fract(bands));
    float antialias = fwidth(bands) + 0.0001;
    float lineMask = 1.0 - smoothstep(uThickness - antialias, uThickness + antialias, lineDistance);
    float glowRadius = uThickness + uGlow * 0.5 + antialias;
    float glowMask = (1.0 - smoothstep(uThickness, glowRadius, lineDistance)) * step(0.0001, uGlow);
    float elevation = clamp(fieldValue / (uMorphAmount * 2.5 + 0.001), 0.0, 1.0);

    vec3 lineColor;
    if (uColorMode < 0.5) {
        lineColor = elevationColor(elevation);
    } else if (uColorMode < 1.5) {
        lineColor = uMid;
    } else {
        lineColor = mix(uMid, uHigh, mod(floor(bands), 2.0));
    }

    float coverage = pow(clamp(lineMask + glowMask * 0.55, 0.0, 1.0), max(uContrast, 0.001));
    vec3 outputColor = lineColor;
    float outputAlpha = coverage;

    if (uFillBands > 0.5) {
        outputColor = mix(elevationColor(elevation), lineColor, coverage);
        outputAlpha = clamp(coverage + 0.1 * elevation, 0.0, 1.0);
    }

    if (uGrain > 0.5) {
        float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + iTime) * 43758.5453);
        outputAlpha += (grain - 0.5) * uGrainIntensity;
    }

    outputColor = clamp(outputColor * uBrightness, 0.0, 1.0);
    float alpha = clamp(outputAlpha, 0.0, 1.0) * uOpacity;
    fragColor = vec4(outputColor * alpha, alpha);
}`;

const controlIndices = [
    [1, -2, 3, -4],
    [9, -8, 7, -6],
    [5, 2, 5, -5],
    [-1, -3, 8, 9],
];

const contextMap = new WeakMap<HTMLElement, { program: Program }>();

export function Topography({
    lowColor = "#7a010c",
    midColor = "#f3efe8",
    highColor = "#ffffff",
    speed = 0.35,
    morphAmount = 3,
    morphSpeed = 0.05,
    bands = 2,
    thickness = 0.01,
    scale = 1,
    pixelSize = 1,
    glow = 0.5,
    colorMode = "elevation",
    contrast = 3,
    brightness = 1,
    fillBands = false,
    opacity = 1,
    grain = true,
    grainIntensity = 0.05,
    mouseInteraction = true,
    mouseRadius = 0.3,
    mouseStrength = 0.4,
    className = "",
}: TopographyProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !window.WebGL2RenderingContext) return;

        let renderer: Renderer;

        try {
            renderer = new Renderer({
                webgl: 2,
                alpha: true,
                premultipliedAlpha: true,
                antialias: false,
                dpr: Math.min(window.devicePixelRatio || 1, 2),
            });
        } catch {
            return;
        }

        const gl = renderer.gl;
        const canvas = gl.canvas;
        gl.clearColor(0, 0, 0, 0);
        container.appendChild(canvas);

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new Float32Array([1, 1]) },
                uSpeed: { value: speed },
                uMorphAmount: { value: morphAmount },
                uMorphSpeed: { value: morphSpeed },
                uBands: { value: bands },
                uThickness: { value: thickness },
                uScale: { value: scale },
                uPixelSize: { value: pixelSize },
                uGlow: { value: glow },
                uColorMode: { value: colorModeToFloat(colorMode) },
                uContrast: { value: contrast },
                uBrightness: { value: brightness },
                uFillBands: { value: fillBands ? 1 : 0 },
                uOpacity: { value: opacity },
                uGrain: { value: grain ? 1 : 0 },
                uGrainIntensity: { value: grainIntensity },
                uLow: { value: new Float32Array(hexToRgb(lowColor)) },
                uMid: { value: new Float32Array(hexToRgb(midColor)) },
                uHigh: { value: new Float32Array(hexToRgb(highColor)) },
                uMouse: { value: new Float32Array([0.5, 0.5]) },
                uMouseEnabled: { value: mouseInteraction ? 1 : 0 },
                uMouseRadius: { value: mouseRadius },
                uMouseStrength: { value: mouseStrength },
                uMouseActive: { value: 0 },
                uCtrlA: { value: new Float32Array([0, 0, 0, 0]) },
                uCtrlB: { value: new Float32Array([0, 0, 0, 0]) },
                uCtrlC: { value: new Float32Array([0, 0, 0, 0]) },
                uCtrlD: { value: new Float32Array([0, 0, 0, 0]) },
            },
        });
        const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
        contextMap.set(container, { program });

        const render = () => renderer.render({ scene: mesh });
        const setSize = () => {
            const rect = container.getBoundingClientRect();
            renderer.setSize(Math.max(1, Math.floor(rect.width)), Math.max(1, Math.floor(rect.height)));
            const resolution = program.uniforms.iResolution.value as Float32Array;
            resolution[0] = gl.drawingBufferWidth;
            resolution[1] = gl.drawingBufferHeight;
            render();
        };

        const resizeObserver = new ResizeObserver(setSize);
        resizeObserver.observe(container);
        setSize();

        const currentMouse = [0.5, 0.5];
        const targetMouse = [0.5, 0.5];
        let mouseActive = 0;
        let mouseActiveTarget = 0;
        let frame = 0;
        let isVisible = true;
        let isPageVisible = !document.hidden;
        let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const startedAt = performance.now();

        const onPointerMove = (event: PointerEvent) => {
            if (!mouseInteraction || event.pointerType !== "mouse") return;

            const rect = container.getBoundingClientRect();
            const isWithinContainer =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;

            if (!isWithinContainer) {
                mouseActiveTarget = 0;
                return;
            }

            targetMouse[0] = (event.clientX - rect.left) / rect.width;
            targetMouse[1] = 1 - (event.clientY - rect.top) / rect.height;
            mouseActiveTarget = 1;
        };
        const onWindowBlur = () => {
            mouseActiveTarget = 0;
        };
        const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
            reducedMotion = event.matches;
            syncAnimation();
        };
        const onVisibilityChange = () => {
            isPageVisible = !document.hidden;
            syncAnimation();
        };
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
            syncAnimation();
        });

        const loop = (time: number) => {
            const uniforms = program.uniforms;
            const elapsed = (time - startedAt) * 0.001;
            uniforms.iTime.value = elapsed;

            const amount = uniforms.uMorphAmount.value as number;
            const animationSpeed = uniforms.uSpeed.value as number;
            const variation = uniforms.uMorphSpeed.value as number;
            const controls = [
                uniforms.uCtrlA.value,
                uniforms.uCtrlB.value,
                uniforms.uCtrlC.value,
                uniforms.uCtrlD.value,
            ] as Float32Array[];

            controls.forEach((control, group) => {
                controlIndices[group].forEach((index, position) => {
                    control[position] = amount * Math.sin(elapsed * animationSpeed * Math.sin(index * variation) + index);
                });
            });

            currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
            currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
            (uniforms.uMouse.value as Float32Array).set(currentMouse);
            mouseActive += 0.05 * (mouseActiveTarget - mouseActive);
            uniforms.uMouseActive.value = mouseActive;

            render();
            frame = requestAnimationFrame(loop);
        };
        const stop = () => {
            if (frame) cancelAnimationFrame(frame);
            frame = 0;
        };
        const syncAnimation = () => {
            if (isVisible && isPageVisible && !reducedMotion && !frame) {
                frame = requestAnimationFrame(loop);
            } else if ((!isVisible || !isPageVisible || reducedMotion) && frame) {
                stop();
                render();
            }
        };

        // Listen at window level so the decorative canvas never blocks the hero's content.
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("blur", onWindowBlur);
        document.addEventListener("visibilitychange", onVisibilityChange);
        motionQuery.addEventListener("change", onMotionPreferenceChange);
        intersectionObserver.observe(container);
        syncAnimation();

        return () => {
            stop();
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            document.removeEventListener("visibilitychange", onVisibilityChange);
            motionQuery.removeEventListener("change", onMotionPreferenceChange);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("blur", onWindowBlur);
            contextMap.delete(container);
            canvas.remove();
            gl.getExtension("WEBGL_lose_context")?.loseContext();
        };
        // The WebGL context has a single lifecycle; the effect below applies prop updates.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const program = container ? contextMap.get(container)?.program : undefined;
        if (!program) return;

        const uniforms = program.uniforms;
        uniforms.uSpeed.value = speed;
        uniforms.uMorphAmount.value = morphAmount;
        uniforms.uMorphSpeed.value = morphSpeed;
        uniforms.uBands.value = bands;
        uniforms.uThickness.value = thickness;
        uniforms.uScale.value = scale;
        uniforms.uPixelSize.value = pixelSize;
        uniforms.uGlow.value = glow;
        uniforms.uColorMode.value = colorModeToFloat(colorMode);
        uniforms.uContrast.value = contrast;
        uniforms.uBrightness.value = brightness;
        uniforms.uFillBands.value = fillBands ? 1 : 0;
        uniforms.uOpacity.value = opacity;
        uniforms.uGrain.value = grain ? 1 : 0;
        uniforms.uGrainIntensity.value = grainIntensity;
        uniforms.uLow.value = new Float32Array(hexToRgb(lowColor));
        uniforms.uMid.value = new Float32Array(hexToRgb(midColor));
        uniforms.uHigh.value = new Float32Array(hexToRgb(highColor));
        uniforms.uMouseEnabled.value = mouseInteraction ? 1 : 0;
        uniforms.uMouseRadius.value = mouseRadius;
        uniforms.uMouseStrength.value = mouseStrength;
    }, [
        bands,
        brightness,
        colorMode,
        contrast,
        fillBands,
        glow,
        grain,
        grainIntensity,
        highColor,
        lowColor,
        midColor,
        morphAmount,
        morphSpeed,
        mouseInteraction,
        mouseRadius,
        mouseStrength,
        opacity,
        pixelSize,
        scale,
        speed,
        thickness,
    ]);

    return <div ref={containerRef} aria-hidden="true" className={`${styles.container} ${className}`.trim()} />;
}
