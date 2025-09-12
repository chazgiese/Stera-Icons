const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const BubbleFilled = memo(
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
          /*#__PURE__*/ _reactJsxRuntime.jsx("g", {
            clipPath: "url(#a)",
            children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m0 4a8 8 0 0 0-8 8 1 1 0 1 0 2 0 6 6 0 0 1 6-6 1 1 0 1 0 0-2",
              clipRule: "evenodd",
            }),
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
BubbleFilled.displayName = "BubbleFilled";
export { BubbleFilled };
export default BubbleFilled;
