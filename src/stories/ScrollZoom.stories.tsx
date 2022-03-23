import React from "react";
import { storiesOf } from "@storybook/react";
import ScrollZoom from "../components/ScrollZoom";

const stories = storiesOf("Component Test", module);

const listArray = (length: number) => Array.from(Array(length).keys());
const randomHex = () =>
  "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
    />
  </svg>
);

stories.add("ScrollZoom Icon", () => {
  return (
    <div>
      {listArray(10).map((index) => (
        <ScrollZoom key={index}>
          <div
            style={{
              width: "5rem",
              height: "5rem",
              marginBottom: "2rem",
              background: randomHex(),
              color: "white",
            }}
          >
            <Icon />
          </div>
        </ScrollZoom>
      ))}
    </div>
  );
});

stories.add("ScrollZoom List", () => {
  return (
    <div style={{ height: "300vh", width: "100%" }}>
      {listArray(100).map((index) => (
        <>
          <ScrollZoom key={index}>
            <div
              style={{
                width: "100%",
                height: "0.5rem",
                background: randomHex(),
                marginBottom: "2rem",
              }}
            ></div>
          </ScrollZoom>
          <div>Lorem Ipsum</div>
        </>
      ))}
    </div>
  );
});

stories.add("ScrollZoom Scale", () => {
  return (
    <div style={{ height: "300vh", width: "100%" }}>
      {listArray(100).map((index) => (
        <>
          <ScrollZoom key={index} scale={index}>
            <div
              style={{
                width: "100%",
                height: "0.5rem",
                background: randomHex(),
                marginBottom: "2rem",
              }}
            ></div>
          </ScrollZoom>
          <div>Lorem Ipsum</div>
        </>
      ))}
    </div>
  );
});

stories.add("ScrollZoom Max", () => {
  return (
    <div>
      {listArray(5).map((index) => (
        <ScrollZoom key={index} max={parseFloat(`1.${index}`)}>
          <div
            style={{
              width: "5rem",
              height: "5rem",
              marginBottom: "2rem",
            }}
          >
            <Icon />
          </div>
        </ScrollZoom>
      ))}
    </div>
  );
});

stories.add("ScrollZoom Shrink", () => {
  return (
    <div>
      {listArray(5).map((index) => (
        <ScrollZoom key={index} shrink>
          <div
            style={{
              width: "5rem",
              height: "5rem",
              marginBottom: "2rem",
            }}
          >
            <Icon />
          </div>
        </ScrollZoom>
      ))}
    </div>
  );
});

stories.add("ScrollZoom Min", () => {
  return (
    <div>
      {listArray(5).map((index) => (
        <ScrollZoom key={index} shrink min={parseFloat(`1.${index}`)}>
          <div
            style={{
              width: "5rem",
              height: "5rem",
              marginBottom: "2rem",
            }}
          >
            <Icon />
          </div>
        </ScrollZoom>
      ))}
    </div>
  );
});
