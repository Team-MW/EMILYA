import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f1e8",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#8a6d45",
          fontSize: 18,
          fontFamily: "serif",
          letterSpacing: "0.08em",
        }}
      >
        E
      </div>
    ),
    { ...size },
  );
}
