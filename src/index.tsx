import React, { ReactNode, useState, useEffect } from "react";
import { addWheelListener, removeWheelListener } from "wheel";

function useDeltaY() {
  /**
   * @init    const [deltaY] = useDeltaY();
   *
   * @returns document.onWheel event.deltaY
   */
  const [deltaY, setDeltaY] = useState<number>(0);
  const onWheel = (e: WheelEvent) => setDeltaY(e.deltaY);

  useEffect(() => {
    addWheelListener(document.body, onWheel);
    return () => removeWheelListener(document.body, onWheel);
  }, []);

  return [deltaY];
}

export default function ScrollZoom({
  children = null,
  scale = 100,
  max, // = 1.1,
  min, // = 1.05,
  shrink = false,
  sway = false,
  show = true,
  style,
}: {
  children?: ReactNode | null;
  scale?: number;
  max?: number;
  min?: number;
  shrink?: boolean;
  sway?: boolean;
  show?: boolean;
  style?: object;
}) {
  const [deltaY] = useDeltaY();
  const [zoom, setZoom] = useState<string | number>("1");

  useEffect(() => {
    if (show === false) {
      return;
    }

    // if (subtle) {
    //max = max || 1.08
    //scale = scale || 100
    // }

    const useScale: number = Math.abs(250 - scale);
    const scaledAbsoluteValue: number = sway
      ? deltaY / useScale
      : Math.abs(deltaY / useScale);

    let z = "";

    if (shrink) {
      z = (1 - scaledAbsoluteValue).toFixed(2);
    } else {
      z = (1 + scaledAbsoluteValue).toFixed(2);
    }

    if (max) {
      if (parseFloat(z) > max) {
        z = max.toString();
      }
    }
    if (min) {
      if (parseFloat(z) < min) {
        z = min.toString();
      }
    }

    setZoom(z);
  }, [deltaY, show]);

  return <div style={{ ...style, zoom: show ? zoom : 1 }}>{children}</div>;
}
