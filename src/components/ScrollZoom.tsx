import useDeltaY from "../lib/hooks/useDeltaY";
import React, { ReactNode, useEffect, useState } from "react";

export default function ScrollZoom({
  children,
  scale = 100,
  max, // = 1.1,
  min, // = 1.05,
  shrink,
}: {
  children: ReactNode;
  scale?: number;
  max?: number;
  min?: number;
  shrink?: boolean;
}) {
  const [deltaY] = useDeltaY();
  const [zoom, setZoom] = useState<string | number>("1");

  useEffect(() => {
    const useScale: number = Math.abs(250 - scale);
    const scaledAbsoluteValue: number = Math.abs(deltaY / useScale);

    let z = "";

    if (shrink !== true) {
      z = (1 + scaledAbsoluteValue).toFixed(2);
    } else {
      z = (1 - scaledAbsoluteValue).toFixed(2);
    }

    if (max) {
      if (!shrink) {
        if (parseFloat(z) > max) {
          z = max.toString();
        }
      }
    }

    setZoom(z);
  }, [deltaY]);

  // if (subtle) {
  //max = max || 1.08
  //scale = scale || 100
  // }

  return <div style={{ zoom }}>{children}</div>;
}
