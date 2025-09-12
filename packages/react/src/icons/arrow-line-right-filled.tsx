var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowLineRightFilled = memo(
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
          d: "M20 20a1 1 0 1 0 2 0V4a1 1 0 0 0-2 0zM2 12a1 1 0 0 0 1 1h7v5a1 1 0 0 0 1.707.707l6-6a1 1 0 0 0 0-1.414l-6-6A1 1 0 0 0 10 6v5H3a1 1 0 0 0-1 1",
        }),
      }))
);
ArrowLineRightFilled.displayName = "ArrowLineRightFilled";
export { ArrowLineRightFilled };
export default ArrowLineRightFilled;
