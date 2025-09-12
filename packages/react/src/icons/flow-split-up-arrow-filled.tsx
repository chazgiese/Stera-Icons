const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitUpArrowFilled = memo(
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
          d: "M1.076 5.383a1 1 0 0 1 .217-1.09l3-3a.997.997 0 0 1 1.414 0l3 3A1 1 0 0 1 8 6H6v1.5A2.5 2.5 0 0 0 8.5 10a4.49 4.49 0 0 1 3.5 1.673A4.49 4.49 0 0 1 15.5 10 2.5 2.5 0 0 0 18 7.5V6h-2a1 1 0 0 1-.707-1.707l3-3a.997.997 0 0 1 1.414 0l3 3A1 1 0 0 1 22 6h-2v1.5a4.5 4.5 0 0 1-4.5 4.5 2.5 2.5 0 0 0-2.5 2.5v.626A4.002 4.002 0 0 1 12 23a4 4 0 0 1-1-7.874V14.5A2.5 2.5 0 0 0 8.5 12 4.5 4.5 0 0 1 4 7.5V6H2a1 1 0 0 1-.924-.617",
        }),
      }))
);
FlowSplitUpArrowFilled.displayName = "FlowSplitUpArrowFilled";
export { FlowSplitUpArrowFilled };
