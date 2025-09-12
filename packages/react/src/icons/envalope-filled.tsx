const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const EnvalopeFilled = memo(
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
            d: "M23 17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V8.52a.5.5 0 0 1 .812-.39l7.065 5.652a5 5 0 0 0 6.246 0l7.065-5.652a.5.5 0 0 1 .812.39z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M19 3c1.148 0 2.183.484 2.912 1.258.482.512.291 1.297-.257 1.736l-7.781 6.226a3 3 0 0 1-3.748 0L2.344 5.994c-.549-.439-.738-1.224-.257-1.736A4 4 0 0 1 5 3z",
          }),
        ],
      }))
);
EnvalopeFilled.displayName = "EnvalopeFilled";
export { EnvalopeFilled };
