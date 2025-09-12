const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const OverlappingCirclesFilled = memo(
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
          d: "M15.5 4.5A7.5 7.5 0 1 1 12 18.633a7.5 7.5 0 1 1 0-13.267 7.47 7.47 0 0 1 3.5-.866m-3.77 1.6A7 7 0 0 0 8.5 12a7 7 0 0 0 3.23 5.9l.27.171.27-.172A7 7 0 0 0 15.5 12a7 7 0 0 0-3.23-5.9L12 5.929z",
          clipRule: "evenodd",
        }),
      }))
);
OverlappingCirclesFilled.displayName = "OverlappingCirclesFilled";
export { OverlappingCirclesFilled };
export default OverlappingCirclesFilled;
