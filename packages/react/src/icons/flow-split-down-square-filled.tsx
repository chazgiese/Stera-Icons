const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitDownSquareFilled = memo(
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
          d: "M22.99 21.204A2 2 0 0 1 21 23h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 1.796-1.99L17 15h1v-1a1 1 0 0 0-1-1h-3c-.77 0-1.469-.292-2-.769A2.99 2.99 0 0 1 10 13H7a1 1 0 0 0-1 1v1h1a2 2 0 0 1 2 2v4l-.01.204A2 2 0 0 1 7 23H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 1.796-1.99L3 15h1v-1a3 3 0 0 1 3-3h3a1 1 0 0 0 1-1V8.874A4.002 4.002 0 0 1 12 1a4 4 0 0 1 1 7.874V10a1 1 0 0 0 1 1h3a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v4z",
        }),
      }))
);
FlowSplitDownSquareFilled.displayName = "FlowSplitDownSquareFilled";
export { FlowSplitDownSquareFilled };
export default FlowSplitDownSquareFilled;
