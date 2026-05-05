import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const R = 16;

/** File is `.png` on disk but content is JPEG (see `file` on asset). */
const LOGO_DATA_URL_PREFIX = "data:image/jpeg;base64,";

export default async function Icon() {
  const bytes = await readFile(
    join(process.cwd(), "public/aurelia-mystica-logo.png")
  );
  const src = `${LOGO_DATA_URL_PREFIX}${bytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: `${R * 2}px`,
          height: `${R * 2}px`,
          display: "flex",
          borderRadius: `${R}px`,
          overflow: "hidden",
          background: "transparent",
        }}>
        <img
          alt=""
          src={src}
          width={R * 2}
          height={R * 2}
          style={{
            objectFit: "cover",
            borderRadius: `${R}px`,
            width: `${R * 2}px`,
            height: `${R * 2}px`,
            clipPath: `circle(${R}px at ${R}px ${R}px)`,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
