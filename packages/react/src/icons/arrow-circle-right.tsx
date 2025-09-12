var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowCircleRight = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M6 12a1 1 0 0 0 1 1h7.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 1 0-1.414 1.414L14.586 11H7a1 1 0 0 0-1 1",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12m2 0a9 9 0 1 1 18 0 9 9 0 0 1-18 0",
            clipRule: "evenodd",
          }),
        ],
      }))
);
ArrowCircleRight.displayName = "ArrowCircleRight";
export { ArrowCircleRight };
export default ArrowCircleRight;
