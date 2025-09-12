var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularDownFilled = memo(
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
          d: "M12 4a1 1 0 0 1 1 1v7h5a1 1 0 0 1 .707 1.707l-6 6a1 1 0 0 1-1.414 0l-6-6A1 1 0 0 1 6 12h5V5a1 1 0 0 1 1-1",
        }),
      }))
);
ArrowRegularDownFilled.displayName = "ArrowRegularDownFilled";
export { ArrowRegularDownFilled };
export default ArrowRegularDownFilled;
