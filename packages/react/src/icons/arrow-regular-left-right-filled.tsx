const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularLeftRightFilled = memo(
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
          d: "M1 12a1 1 0 0 1 .293-.707l5-5A1 1 0 0 1 8 7v4h8V7a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 17v-4H8v4a1 1 0 0 1-1.707.707l-5-5-.066-.073A1 1 0 0 1 1 12",
        }),
      }))
);
ArrowRegularLeftRightFilled.displayName = "ArrowRegularLeftRightFilled";
export { ArrowRegularLeftRightFilled };
export default ArrowRegularLeftRightFilled;
