import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ChevronOutwardFilled = memo(
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
          d: "M18 15a1 1 0 0 1 .707 1.707l-6 6a1 1 0 0 1-1.414 0l-6-6A1 1 0 0 1 6 15zM11.293 1.293a1 1 0 0 1 1.414 0l6 6A1 1 0 0 1 18 9H6a1 1 0 0 1-.707-1.707z",
        }),
      }))
);
ChevronOutwardFilled.displayName = "ChevronOutwardFilled";
export { ChevronOutwardFilled };
export default ChevronOutwardFilled;
