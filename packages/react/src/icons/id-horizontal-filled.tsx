var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const IdHorizontalFilled = memo(
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
          d: "M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM7.83 8.5a2.5 2.5 0 0 0-2.5 2.5c0 .76.34 1.44.876 1.898a3.5 3.5 0 0 0-1.678 1.935A.502.502 0 0 0 5 15.5h5.658a.5.5 0 0 0 .472-.667 3.5 3.5 0 0 0-1.679-1.935A2.5 2.5 0 0 0 10.33 11a2.5 2.5 0 0 0-2.5-2.5M15 13a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z",
          clipRule: "evenodd",
        }),
      }))
);
IdHorizontalFilled.displayName = "IdHorizontalFilled";
export { IdHorizontalFilled };
export default IdHorizontalFilled;
