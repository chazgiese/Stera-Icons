const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowDownArrow = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsx("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17.707 16.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 19.586V10.9A5.001 5.001 0 0 1 12 1a5 5 0 0 1 1 9.9v8.686l3.293-3.293a1 1 0 0 1 1.414 0M15 6a3 3 0 1 0-6 0 3 3 0 0 0 6 0",
          clipRule: "evenodd",
        }),
      }))
);
FlowDownArrow.displayName = "FlowDownArrow";
export { FlowDownArrow };
export default FlowDownArrow;
