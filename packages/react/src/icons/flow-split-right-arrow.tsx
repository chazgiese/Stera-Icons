const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitRightArrow = memo(
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
          d: "M18.617 1.076a1 1 0 0 1 1.09.217l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 18 8V6h-1.5A2.5 2.5 0 0 0 14 8.5a4.49 4.49 0 0 1-1.673 3.5A4.49 4.49 0 0 1 14 15.5a2.5 2.5 0 0 0 2.5 2.5H18v-2a1 1 0 0 1 1.707-.707l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 18 22v-2h-1.5a4.5 4.5 0 0 1-4.5-4.5A2.5 2.5 0 0 0 9.5 13h-.626A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H9.5A2.5 2.5 0 0 0 12 8.5 4.5 4.5 0 0 1 16.5 4H18V2a1 1 0 0 1 .617-.924M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
          clipRule: "evenodd",
        }),
      }))
);
FlowSplitRightArrow.displayName = "FlowSplitRightArrow";
export { FlowSplitRightArrow };
export default FlowSplitRightArrow;
