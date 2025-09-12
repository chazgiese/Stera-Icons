const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ExclamationPoint = memo(
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
          d: "M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 2c.416 0 .814.158 1.095.44.281.28.423.662.405 1.06l-.025.55-.45 9.9-.025.55a1 1 0 0 1-.315.676 1 1 0 0 1-.685.28 1 1 0 0 1-.685-.28A1 1 0 0 1 11 14.5l-.025-.55-.45-9.9-.025-.55c-.018-.398.124-.78.405-1.06.281-.282.679-.44 1.095-.44",
        }),
      }))
);
ExclamationPoint.displayName = "ExclamationPoint";
export { ExclamationPoint };
export default ExclamationPoint;
