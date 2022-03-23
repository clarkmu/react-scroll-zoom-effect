import useDeltaY from "@/lib/hooks/useDeltaY";
import React, { ReactNode, useEffect, useState } from "react";

export default function ScrollZoom({
  children,
  scale,
  max,
  shrink,
}: {
  children: ReactNode;
  scale?: number;
  max?: number;
  shrink?: boolean;
}) {
  const [deltaY] = useDeltaY();
  const [zoom, setZoom] = useState<string | number>("1");

  useEffect(() => {
    let z = "";

    const scaledAbsoluteValue: number = Math.abs(deltaY / 100);

    if (!shrink) {
      z = (1 + scaledAbsoluteValue).toFixed(2);
    } else {
      z = (1 - scaledAbsoluteValue).toFixed(2);
    }
    setZoom(z);
  }, [deltaY]);

  return <div style={{ zoom }}>{children}</div>;
}
