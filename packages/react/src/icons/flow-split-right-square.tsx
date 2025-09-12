import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const FlowSplitRightSquare = memo(
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
          d: "M20.5 1A2.5 2.5 0 0 1 23 3.5v3A2.5 2.5 0 0 1 20.5 9h-3A2.5 2.5 0 0 1 15 6.5V6h-1a1 1 0 0 0-1 1v3c0 .77-.292 1.469-.769 2 .477.531.769 1.23.769 2v3a1 1 0 0 0 1 1h1v-.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5V20h-1a3 3 0 0 1-3-3v-3a1 1 0 0 0-1-1H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H10a1 1 0 0 0 1-1V7a3 3 0 0 1 3-3h1v-.5A2.5 2.5 0 0 1 17.5 1zm-3 16a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m12.5-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z",
          clipRule: "evenodd",
        }),
      }))
);
FlowSplitRightSquare.displayName = "FlowSplitRightSquare";
export { FlowSplitRightSquare };
export default FlowSplitRightSquare;
