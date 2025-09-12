import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const CircleSlash = memo(
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
          d: "M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556s11.26-4.296 15.556 0 4.296 11.26 0 15.556-11.26 4.296-15.556 0m14.809-2.161c2.83-3.534 2.609-8.705-.667-11.981s-8.447-3.497-11.98-.667zm-13.395.747c3.276 3.276 8.447 3.497 11.98.667L4.97 6.383c-2.83 3.534-2.609 8.705.667 11.981",
          clipRule: "evenodd",
        }),
      }))
);
CircleSlash.displayName = "CircleSlash";
export { CircleSlash };
export default CircleSlash;
