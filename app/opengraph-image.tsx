import { ImageResponse } from "next/og";

export const alt = "Web7 — Web design & development — Canary Islands · Prague · Spain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#090909", color: "#f3efe8", padding: "64px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 32, color: "#ff3838", letterSpacing: 5 }}>WEB7 STUDIO</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 1.05 }}><span>Web design.</span><span>Built for your business.</span></div>
      <div style={{ display: "flex", borderTop: "1px solid #666", paddingTop: 24, fontSize: 26 }}>Canary Islands · Prague · Spain</div>
    </div>, size,
  );
}
