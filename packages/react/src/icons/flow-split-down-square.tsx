const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitDownSquare = memo(
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
          d: "M23 20.5a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5h.5v-1a1 1 0 0 0-1-1h-3c-.77 0-1.469-.292-2-.769A2.99 2.99 0 0 1 10 13H7a1 1 0 0 0-1 1v1h.5A2.5 2.5 0 0 1 9 17.5v3A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15H4v-1a3 3 0 0 1 3-3h3a1 1 0 0 0 1-1V8.874A4.002 4.002 0 0 1 12 1a4 4 0 0 1 1 7.874V10a1 1 0 0 0 1 1h3a3 3 0 0 1 3 3v1h.5a2.5 2.5 0 0 1 2.5 2.5zm-16-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM14 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m7 12.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z",
          clipRule: "evenodd",
        }),
      }))
);
FlowSplitDownSquare.displayName = "FlowSplitDownSquare";
export { FlowSplitDownSquare };
export default FlowSplitDownSquare;
