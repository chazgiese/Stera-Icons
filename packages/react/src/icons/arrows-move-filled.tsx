import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ArrowsMoveFilled = memo(
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
          d: "M12 1a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 15 6h-2v5h5V9a1 1 0 0 1 1.707-.707l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 18 15v-2h-5v5h2a1 1 0 0 1 .707 1.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 9 18h2v-5H6v2a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 6 9v2h5V6H9a1 1 0 0 1-.707-1.707l3-3 .073-.066A1 1 0 0 1 12 1",
        }),
      }))
);
ArrowsMoveFilled.displayName = "ArrowsMoveFilled";
export { ArrowsMoveFilled };
export default ArrowsMoveFilled;
