var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowCircleLeftFilled = memo(
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
          d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-5 0a1 1 0 0 0-1-1H9.414l3.293-3.293a1 1 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 1 0 1.414-1.414L9.414 13H17a1 1 0 0 0 1-1",
          clipRule: "evenodd",
        }),
      }))
);
ArrowCircleLeftFilled.displayName = "ArrowCircleLeftFilled";
export { ArrowCircleLeftFilled };
export default ArrowCircleLeftFilled;
