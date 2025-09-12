const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitDownArrowFilled = memo(
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
          d: "M1.076 18.617a1 1 0 0 0 .217 1.09l3 3a.997.997 0 0 0 1.414 0l3-3A1 1 0 0 0 8 18H6v-1.5A2.5 2.5 0 0 1 8.5 14a4.49 4.49 0 0 0 3.5-1.673A4.49 4.49 0 0 0 15.5 14a2.5 2.5 0 0 1 2.5 2.5V18h-2a1 1 0 0 0-.707 1.707l3 3a.997.997 0 0 0 1.414 0l3-3A1 1 0 0 0 22 18h-2v-1.5a4.5 4.5 0 0 0-4.5-4.5A2.5 2.5 0 0 1 13 9.5v-.626A4.002 4.002 0 0 0 12 1a4 4 0 0 0-1 7.874V9.5A2.5 2.5 0 0 1 8.5 12 4.5 4.5 0 0 0 4 16.5V18H2a1 1 0 0 0-.924.617",
        }),
      }))
);
FlowSplitDownArrowFilled.displayName = "FlowSplitDownArrowFilled";
export { FlowSplitDownArrowFilled };
