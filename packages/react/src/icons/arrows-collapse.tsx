import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ArrowsCollapse = memo(
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
          d: "M10 13a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-3.586l-5.293 5.293a1 1 0 1 1-1.414-1.414L7.586 15H4a1 1 0 0 1 0-2zM20.293 2.293a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3.586z",
        }),
      }))
);
ArrowsCollapse.displayName = "ArrowsCollapse";
export { ArrowsCollapse };
export default ArrowsCollapse;
