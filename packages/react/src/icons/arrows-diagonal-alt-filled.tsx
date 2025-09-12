var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowsDiagonalAltFilled = memo(
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
          d: "M14.707 13.293a1 1 0 1 0-1.414 1.414L16.586 18l-2.293 2.293A1 1 0 0 0 15 22h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1.707-.707L18 16.586zM3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1.707.707L6 7.414l3.293 3.293a1 1 0 1 0 1.414-1.414L7.414 6l2.293-2.293A1 1 0 0 0 9 2z",
        }),
      }))
);
ArrowsDiagonalAltFilled.displayName = "ArrowsDiagonalAltFilled";
export { ArrowsDiagonalAltFilled };
export default ArrowsDiagonalAltFilled;
