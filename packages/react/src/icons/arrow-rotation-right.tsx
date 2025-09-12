const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRotationRight = memo(
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
          d: "M18.364 5.636A1 1 0 0 0 16.95 7.05a7.002 7.002 0 0 1-4.691 11.945L12 19h-.586l1.293-1.293a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 1 0 1.414-1.414L11.414 21H12l.333-.006a9.002 9.002 0 0 0 6.031-15.358M12.707.293a1 1 0 1 0-1.414 1.414L12.586 3H12l-.333.006a9 9 0 0 0-6.031 15.358A1 1 0 0 0 7.05 16.95 7.002 7.002 0 0 1 11.74 5.005l.26-.005h.585l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z",
        }),
      }))
);
ArrowRotationRight.displayName = "ArrowRotationRight";
export { ArrowRotationRight };
export default ArrowRotationRight;
