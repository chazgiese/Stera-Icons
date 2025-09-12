var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowCircleDownLeftFilled = memo(
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
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m4.243 6.758a1 1 0 0 0-1.414 0l-5.364 5.364V8.465a1 1 0 0 0-2 0v7.071a1 1 0 0 0 1 1h7.071a1 1 0 0 0 0-2H10.88l5.364-5.364a1 1 0 0 0 0-1.414",
          clipRule: "evenodd",
        }),
      }))
);
ArrowCircleDownLeftFilled.displayName = "ArrowCircleDownLeftFilled";
export { ArrowCircleDownLeftFilled };
export default ArrowCircleDownLeftFilled;
