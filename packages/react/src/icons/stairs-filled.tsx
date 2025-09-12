const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const StairsFilled = memo(
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
          d: "M22.5 2.5a1 1 0 1 1 0 2h-4.667v5.667a1 1 0 0 1-1 1h-5.666v5.666a1 1 0 0 1-1 1H4.5V22.5a1 1 0 1 1-2 0v-5.667a1 1 0 0 1 1-1h5.667v-5.666a1 1 0 0 1 1-1h5.666V3.5a1 1 0 0 1 1-1z",
        }),
      }))
);
StairsFilled.displayName = "StairsFilled";
export { StairsFilled };
