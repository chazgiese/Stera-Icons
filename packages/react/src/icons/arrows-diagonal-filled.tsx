const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowsDiagonalFilled = memo(
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
          d: "M9.293 13.293a1 1 0 1 1 1.414 1.414L7.414 18l2.293 2.293A1 1 0 0 1 9 22H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1.707-.707L6 16.586zM21 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1.707.707L18 7.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L16.586 6l-2.293-2.293A1 1 0 0 1 15 2z",
        }),
      }))
);
ArrowsDiagonalFilled.displayName = "ArrowsDiagonalFilled";
export { ArrowsDiagonalFilled };
export default ArrowsDiagonalFilled;
