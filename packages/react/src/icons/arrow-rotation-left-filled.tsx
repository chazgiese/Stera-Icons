var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRotationLeftFilled = memo(
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
          d: "M5.636 5.636A1 1 0 0 1 7.05 7.05 7.001 7.001 0 0 0 11 18.927V17a1 1 0 0 1 1.707-.707l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 23v-2.057A9 9 0 0 1 5.636 5.636M11.293.293A1 1 0 0 1 13 1v2.056a9.002 9.002 0 0 1 5.364 15.308 1 1 0 0 1-1.414-1.414A7.002 7.002 0 0 0 13 5.072V7a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414z",
        }),
      }))
);
ArrowRotationLeftFilled.displayName = "ArrowRotationLeftFilled";
export { ArrowRotationLeftFilled };
export default ArrowRotationLeftFilled;
