const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowSplitRight = memo(
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
          d: "M19 1a4 4 0 1 1-3.874 5H14a1 1 0 0 0-1 1v3c0 .77-.292 1.469-.769 2 .477.531.769 1.23.769 2v3a1 1 0 0 0 1 1h1.126A4.002 4.002 0 0 1 23 19a4 4 0 0 1-7.874 1H14a3 3 0 0 1-3-3v-3a1 1 0 0 0-1-1H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H10a1 1 0 0 0 1-1V7a3 3 0 0 1 3-3h1.126c.444-1.725 2.01-3 3.874-3m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m14-7a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
          clipRule: "evenodd",
        }),
      }))
);
FlowSplitRight.displayName = "FlowSplitRight";
export { FlowSplitRight };
export default FlowSplitRight;
