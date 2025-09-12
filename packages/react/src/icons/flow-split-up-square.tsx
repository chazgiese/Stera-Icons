const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitUpSquare = memo(
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
          d: "M23 3.5A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5v3A2.5 2.5 0 0 0 17.5 9h.5v1a1 1 0 0 1-1 1h-3c-.77 0-1.469.292-2 .769A2.99 2.99 0 0 0 10 11H7a1 1 0 0 1-1-1V9h.5A2.5 2.5 0 0 0 9 6.5v-3A2.5 2.5 0 0 0 6.5 1h-3A2.5 2.5 0 0 0 1 3.5v3A2.5 2.5 0 0 0 3.5 9H4v1a3 3 0 0 0 3 3h3a1 1 0 0 1 1 1v1.126A4.002 4.002 0 0 0 12 23a4 4 0 0 0 1-7.874V14a1 1 0 0 1 1-1h3a3 3 0 0 0 3-3V9h.5A2.5 2.5 0 0 0 23 6.5zm-16 3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zM14 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7-12.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5z",
          clipRule: "evenodd",
        }),
      }))
);
FlowSplitUpSquare.displayName = "FlowSplitUpSquare";
export { FlowSplitUpSquare };
export default FlowSplitUpSquare;
