var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const BrightnessLow = memo(
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
          d: "M12 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-5.657-1.757a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414m9.9 0a1.001 1.001 0 1 1 1.414 1.415 1.001 1.001 0 0 1-1.415-1.416M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m14 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M6.343 6.343a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415m9.9 0a1.001 1.001 0 1 1 1.414 1.416 1.001 1.001 0 0 1-1.415-1.416M12 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        }),
      }))
);
BrightnessLow.displayName = "BrightnessLow";
export { BrightnessLow };
export default BrightnessLow;
