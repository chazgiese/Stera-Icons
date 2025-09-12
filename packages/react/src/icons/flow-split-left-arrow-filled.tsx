var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitLeftArrowFilled = memo(
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
          d: "M5.383 1.076a1 1 0 0 0-1.09.217l-3 3a.997.997 0 0 0 0 1.414l3 3A1 1 0 0 0 6 8V6h1.5A2.5 2.5 0 0 1 10 8.5a4.49 4.49 0 0 0 1.673 3.5A4.49 4.49 0 0 0 10 15.5 2.5 2.5 0 0 1 7.5 18H6v-2a1 1 0 0 0-1.707-.707l-3 3a.997.997 0 0 0 0 1.414l3 3A1 1 0 0 0 6 22v-2h1.5a4.5 4.5 0 0 0 4.5-4.5 2.5 2.5 0 0 1 2.5-2.5h.626A4.002 4.002 0 0 0 23 12a4 4 0 0 0-7.874-1H14.5A2.5 2.5 0 0 1 12 8.5 4.5 4.5 0 0 0 7.5 4H6V2a1 1 0 0 0-.617-.924",
        }),
      }))
);
FlowSplitLeftArrowFilled.displayName = "FlowSplitLeftArrowFilled";
export { FlowSplitLeftArrowFilled };
export default FlowSplitLeftArrowFilled;
