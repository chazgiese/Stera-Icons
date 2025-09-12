const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ScanFilled = memo(
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
          d: "M21 15v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3zM23 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zM18 3a3 3 0 0 1 3 3v3H3V6a3 3 0 0 1 3-3z",
        }),
      }))
);
ScanFilled.displayName = "ScanFilled";
export { ScanFilled };
export default ScanFilled;
