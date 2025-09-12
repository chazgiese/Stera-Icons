const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularDownLeft = memo(
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
          d: "M17.293 5.293a1 1 0 1 1 1.414 1.414L8.414 17H16a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v7.586z",
        }),
      }))
);
ArrowRegularDownLeft.displayName = "ArrowRegularDownLeft";
export { ArrowRegularDownLeft };
export default ArrowRegularDownLeft;
