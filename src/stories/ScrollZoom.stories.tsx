import React, { ReactNode, useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import ScrollZoom from "../";

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

stories.add("ScrollZoom Icon", () => {
  return (
    <div>
      {listArray(10).map((index) => (
        <ScrollZoom key={index}>
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
      ))}
    </div>
  );
});

stories.add("ScrollZoom List", () => {
  return (
    <div style={{ height: "300vh", width: "100%" }}>
      {listArray(20).map((index) => (
        <>
          <ScrollZoom key={index}>
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
    </div>
  );
});

stories.add("ScrollZoom Scale", () => {
  return (
    <div style={{ height: "300vh", width: "100%" }}>
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
    </div>
  );
});

stories.add("ScrollZoom Max", () => {
  return (
    <div>
      {listArray(5).map((index) => (
        <ScrollZoom key={index} max={parseFloat(`1.${index}`)}>
          <IconWrapper style={{ marginBottom: "2rem" }}>
            <Icon />
          </IconWrapper>
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
          <IconWrapper style={{ marginBottom: "2rem" }}>
            <Icon />
          </IconWrapper>
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
          <IconWrapper style={{ marginBottom: "2rem" }}>
            <Icon />
          </IconWrapper>
        </ScrollZoom>
      ))}
    </div>
  );
});

stories.add("ScrollZoom Show", () => {
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
