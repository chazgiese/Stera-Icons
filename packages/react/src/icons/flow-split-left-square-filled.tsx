var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitLeftSquareFilled = memo(
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
          d: "M2.796 1.01A2 2 0 0 0 1 3v4a2 2 0 0 0 2 2h4a2 2 0 0 0 1.99-1.796L9 7V6h1a1 1 0 0 1 1 1v3c0 .77.292 1.469.769 2A2.99 2.99 0 0 0 11 14v3a1 1 0 0 1-1 1H9v-1a2 2 0 0 0-2-2H3l-.204.01A2 2 0 0 0 1 17v4a2 2 0 0 0 2 2h4a2 2 0 0 0 1.99-1.796L9 21v-1h1a3 3 0 0 0 3-3v-3a1 1 0 0 1 1-1h1.126A4.002 4.002 0 0 0 23 12a4 4 0 0 0-7.874-1H14a1 1 0 0 1-1-1V7a3 3 0 0 0-3-3H9V3a2 2 0 0 0-2-2H3z",
        }),
      }))
);
FlowSplitLeftSquareFilled.displayName = "FlowSplitLeftSquareFilled";
export { FlowSplitLeftSquareFilled };
export default FlowSplitLeftSquareFilled;
