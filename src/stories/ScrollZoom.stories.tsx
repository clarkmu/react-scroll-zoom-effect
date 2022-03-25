import React, { ReactNode, useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import ScrollZoom from "../";

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
const Wrapper = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      border: `1px dashed ${randomHex()}`,
    }}
  >
    {children}
  </div>
);
const IconWrapper = ({
  children = null,
  style = {},
}: {
  children?: ReactNode | null;
  style?: object;
}) => (
  <div
    style={{
      width: "5rem",
      height: "5rem",
      ...style,
    }}
  >
    {children}
  </div>
);

const useSelfTogglingShow = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow((s) => !s);
    setTimeout(toggleShow, 3000);
  };
  useEffect(toggleShow, []);
  return [show];
};

const basicViews = storiesOf("Basic Views", module);

basicViews.add("Icon", () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Default
      <ScrollZoom>
        <IconWrapper
          style={{
            marginBottom: "2rem",
            background: randomHex(),
            color: "white",
          }}
        >
          <Icon />
        </IconWrapper>
      </ScrollZoom>
      Shrink
      <ScrollZoom shrink>
        <IconWrapper
          style={{
            marginBottom: "2rem",
            background: randomHex(),
            color: "white",
          }}
        >
          <Icon />
        </IconWrapper>
      </ScrollZoom>
      Sway
      <ScrollZoom sway>
        <IconWrapper
          style={{
            marginBottom: "2rem",
            background: randomHex(),
            color: "white",
          }}
        >
          <Icon />
        </IconWrapper>
      </ScrollZoom>
    </div>
  );
});

basicViews.add("List", () => {
  return (
    <>
      {listArray(20).map((index) => (
        <>
          <ScrollZoom key={index} sway>
            <IconWrapper
              style={{
                marginBottom: "2rem",
                height: "0.5rem",
                background: randomHex(),
                width: "100%",
              }}
            ></IconWrapper>
          </ScrollZoom>
          <div>Lorem Ipsum</div>
        </>
      ))}
    </>
  );
});

const paramTests = storiesOf("Param Tests", module);

paramTests.add("Scale", () => {
  return (
    <>
      {listArray(100).map((index) => (
        <>
          <ScrollZoom key={index} scale={index}>
            <IconWrapper
              style={{
                marginBottom: "2rem",
                height: "0.5rem",
                background: randomHex(),
                width: "100%",
              }}
            ></IconWrapper>
          </ScrollZoom>
          <div>Lorem Ipsum</div>
        </>
      ))}
    </>
  );
});

paramTests.add("Max", () => {
  return (
    <>
      {listArray(3).map((index) => (
        <ScrollZoom key={index} max={parseFloat(`1.${index}`)}>
          <IconWrapper style={{ marginBottom: "2rem" }}>
            <Icon />
          </IconWrapper>
        </ScrollZoom>
      ))}
    </>
  );
});

paramTests.add("Min", () => {
  return (
    <>
      {listArray(3)
        .map((index) => (
          <ScrollZoom key={index} shrink min={1 - index / 10}>
            <IconWrapper style={{ marginBottom: "2rem" }}>
              <Icon />
            </IconWrapper>
          </ScrollZoom>
        ))
        .reverse()}
    </>
  );
});

paramTests.add("Show", () => {
  const [show] = useSelfTogglingShow();

  return (
    <>
      <Wrapper>
        Toggles show on 3 second timer. Current: {show.toString()}
        <ScrollZoom show={show}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </ScrollZoom>
      </Wrapper>
      <Wrapper>
        Show: false
        <ScrollZoom show={false}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </ScrollZoom>
      </Wrapper>
      <Wrapper>
        Show: undefined
        <ScrollZoom>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </ScrollZoom>
      </Wrapper>
      <Wrapper>
        Show: true
        <ScrollZoom show={true}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </ScrollZoom>
      </Wrapper>
    </>
  );
});

const examples = storiesOf("Examples", module);

examples.add("List Gradient", () => {
  return (
    <>
      {listArray(5).map((index) => (
        <IconWrapper
          key={index}
          style={{
            marginBottom: "2rem",
            height: "2rem",
            background: randomHex(),
            width: "100%",
          }}
        >
          <ScrollZoom
            sway
            scale={200}
            style={{
              height: "2rem",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 75%,rgba(255,255,255,0) 100%)",
            }}
          ></ScrollZoom>
        </IconWrapper>
      ))}
    </>
  );
});
