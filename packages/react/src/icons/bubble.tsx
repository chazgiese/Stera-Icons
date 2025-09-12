const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Bubble = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) =>
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsxs("g", {
            fill: "currentColor",
            clipPath: "url(#a)",
            children: [
              /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
                d: "M12 4a1 1 0 1 1 0 2 6 6 0 0 0-6 6 1 1 0 1 1-2 0 8 8 0 0 1 8-8",
              }),
              /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
                fillRule: "evenodd",
                d: "M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2",
                clipRule: "evenodd",
              }),
            ],
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("defs", {
            children: /*#__PURE__*/ _reactJsxRuntime.jsx("clipPath", {
              id: "a",
              children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
                fill: "currentColor",
                d: "M0 0h24v24H0z",
              }),
            }),
          }),
        ],
      }))
);
Bubble.displayName = "Bubble";
export { Bubble };
