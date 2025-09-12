const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChevronFullUp = memo(
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
          d: "M11.293 7.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 19 16H5a1 1 0 0 1-.707-1.707zM7.414 14h9.172L12 9.414z",
          clipRule: "evenodd",
        }),
      }))
);
ChevronFullUp.displayName = "ChevronFullUp";
export { ChevronFullUp };
export default ChevronFullUp;
