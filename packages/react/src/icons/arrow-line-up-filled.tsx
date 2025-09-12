var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowLineUpFilled = memo(
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
          d: "M20 4a1 1 0 1 0 0-2H4a1 1 0 0 0 0 2zM12 22a1 1 0 0 0 1-1v-7h5a1 1 0 0 0 .707-1.707l-6-6a1 1 0 0 0-1.414 0l-6 6A1 1 0 0 0 6 14h5v7a1 1 0 0 0 1 1",
        }),
      }))
);
ArrowLineUpFilled.displayName = "ArrowLineUpFilled";
export { ArrowLineUpFilled };
export default ArrowLineUpFilled;
