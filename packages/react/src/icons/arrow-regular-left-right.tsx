var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularLeftRight = memo(
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
          d: "M1 12a1 1 0 0 1 .293-.707l5-5a1 1 0 0 1 1.414 1.414L4.414 11h15.172l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 .067 1.34l-.067.074-5 5a1 1 0 1 1-1.414-1.414L19.586 13H4.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5-.066-.073A1 1 0 0 1 1 12",
        }),
      }))
);
ArrowRegularLeftRight.displayName = "ArrowRegularLeftRight";
export { ArrowRegularLeftRight };
export default ArrowRegularLeftRight;
