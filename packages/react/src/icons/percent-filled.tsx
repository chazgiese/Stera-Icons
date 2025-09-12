var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const PercentFilled = memo(
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
          d: "M19.293 3.293a1 1 0 1 1 1.414 1.414l-16 16a1 1 0 1 1-1.414-1.414zM17.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M6.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7",
        }),
      }))
);
PercentFilled.displayName = "PercentFilled";
export { PercentFilled };
export default PercentFilled;
