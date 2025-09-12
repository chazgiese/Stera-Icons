var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const LabelAltFilled = memo(
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
          d: "M20.745 3c1.767 0 2.844 1.944 1.907 3.442l-3.141 5.028a1 1 0 0 0 0 1.06l3.141 5.028c.937 1.498-.14 3.442-1.907 3.442H7.108a3 3 0 0 1-2.544-1.41l-4.08-6.53a2 2 0 0 1 0-2.12l4.08-6.53A3 3 0 0 1 7.108 3z",
        }),
      }))
);
LabelAltFilled.displayName = "LabelAltFilled";
export { LabelAltFilled };
export default LabelAltFilled;
