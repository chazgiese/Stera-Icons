var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChevronFullInward = memo(
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
          d: "M11.293 14.293a1 1 0 0 1 1.414 0l6 6A1 1 0 0 1 18 22H6a1 1 0 0 1-.707-1.707zM8.414 20h7.172L12 16.414zM18 2a1 1 0 0 1 .707 1.707l-6 6a1 1 0 0 1-1.414 0l-6-6A1 1 0 0 1 6 2zm-6 5.586L15.586 4H8.414z",
          clipRule: "evenodd",
        }),
      }))
);
ChevronFullInward.displayName = "ChevronFullInward";
export { ChevronFullInward };
export default ChevronFullInward;
