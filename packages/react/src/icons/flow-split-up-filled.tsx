const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitUpFilled = memo(
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
          d: "M1 5a4 4 0 1 1 5 3.874V10a1 1 0 0 0 1 1h3c.77 0 1.469.292 2 .769A2.99 2.99 0 0 1 14 11h3a1 1 0 0 0 1-1V8.874A4.002 4.002 0 0 1 19 1a4 4 0 0 1 1 7.874V10a3 3 0 0 1-3 3h-3a1 1 0 0 0-1 1v1.126A4.002 4.002 0 0 1 12 23a4 4 0 0 1-1-7.874V14a1 1 0 0 0-1-1H7a3 3 0 0 1-3-3V8.874A4 4 0 0 1 1 5",
        }),
      }))
);
FlowSplitUpFilled.displayName = "FlowSplitUpFilled";
export { FlowSplitUpFilled };
export default FlowSplitUpFilled;
