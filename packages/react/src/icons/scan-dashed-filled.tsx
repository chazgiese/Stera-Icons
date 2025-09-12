import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ScanDashedFilled = memo(
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
          d: "M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M20 15a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M23 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zM8 3a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3zM18 3a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z",
        }),
      }))
);
ScanDashedFilled.displayName = "ScanDashedFilled";
export { ScanDashedFilled };
export default ScanDashedFilled;
