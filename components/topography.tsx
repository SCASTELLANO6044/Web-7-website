"use client";

import dynamic from "next/dynamic";
import { useDeferredVisual } from "@/components/use-deferred-visual";
import type { TopographyProps } from "./topography-canvas";

const TopographyCanvas = dynamic(
    () => import("./topography-canvas").then((module) => module.Topography),
    { ssr: false },
);

export function Topography(props: TopographyProps) {
    const ready = useDeferredVisual();
    return ready ? <TopographyCanvas {...props} /> : null;
}
