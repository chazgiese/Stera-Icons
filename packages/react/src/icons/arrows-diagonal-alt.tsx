const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowsDiagonalAlt = memo(
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
          d: "M14.707 13.293a1 1 0 1 0-1.414 1.414L18.586 20H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1v-6a1 1 0 1 0-2 0v3.586zM3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V5.414l5.293 5.293a1 1 0 1 0 1.414-1.414L5.414 4H9a1 1 0 0 0 0-2z",
        }),
      }))
);
ArrowsDiagonalAlt.displayName = "ArrowsDiagonalAlt";
export { ArrowsDiagonalAlt };
export default ArrowsDiagonalAlt;
