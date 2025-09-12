var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitUpSquareFilled = memo(
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
          d: "M22.99 2.796A2 2 0 0 0 21 1h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 1.796 1.99L17 9h1v1a1 1 0 0 1-1 1h-3c-.77 0-1.469.292-2 .769A2.99 2.99 0 0 0 10 11H7a1 1 0 0 1-1-1V9h1a2 2 0 0 0 2-2V3l-.01-.204A2 2 0 0 0 7 1H3a2 2 0 0 0-2 2v4a2 2 0 0 0 1.796 1.99L3 9h1v1a3 3 0 0 0 3 3h3a1 1 0 0 1 1 1v1.126A4.002 4.002 0 0 0 12 23a4 4 0 0 0 1-7.874V14a1 1 0 0 1 1-1h3a3 3 0 0 0 3-3V9h1a2 2 0 0 0 2-2V3z",
        }),
      }))
);
FlowSplitUpSquareFilled.displayName = "FlowSplitUpSquareFilled";
export { FlowSplitUpSquareFilled };
export default FlowSplitUpSquareFilled;
