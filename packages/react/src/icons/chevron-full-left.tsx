var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChevronFullLeft = memo(
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
          d: "M14.293 4.293A1 1 0 0 1 16 5v14a1 1 0 0 1-1.707.707l-7-7a1 1 0 0 1 0-1.414zM9.414 12 14 16.586V7.414z",
          clipRule: "evenodd",
        }),
      }))
);
ChevronFullLeft.displayName = "ChevronFullLeft";
export { ChevronFullLeft };
export default ChevronFullLeft;
