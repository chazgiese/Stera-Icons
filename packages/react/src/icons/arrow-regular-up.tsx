var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularUp = memo(
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
          d: "M11 19a1 1 0 0 0 2 0V7.414l5.293 5.293a1 1 0 1 0 1.414-1.414l-7-7a1 1 0 0 0-1.414 0l-7 7a1 1 0 1 0 1.414 1.414L11 7.414z",
        }),
      }))
);
ArrowRegularUp.displayName = "ArrowRegularUp";
export { ArrowRegularUp };
export default ArrowRegularUp;
