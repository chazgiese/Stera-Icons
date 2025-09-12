var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CircleDivideVertical = memo(
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
          d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m12 8.943c4.5-.497 8-4.31 8-8.943 0-4.632-3.5-8.446-8-8.943zM3 12c0 4.633 3.5 8.446 8 8.943V3.057C6.5 3.554 3 7.367 3 12",
          clipRule: "evenodd",
        }),
      }))
);
CircleDivideVertical.displayName = "CircleDivideVertical";
export { CircleDivideVertical };
export default CircleDivideVertical;
