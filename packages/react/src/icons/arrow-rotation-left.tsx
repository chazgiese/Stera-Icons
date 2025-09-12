const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRotationLeft = memo(
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
          d: "M5.636 5.636A1 1 0 0 1 7.05 7.05a7.002 7.002 0 0 0 4.691 11.945l.26.005h.585l-1.293-1.293a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L12.586 21H12l-.333-.006A9.002 9.002 0 0 1 5.636 5.636M11.293.293a1 1 0 1 1 1.414 1.414L11.414 3H12l.333.006a9 9 0 0 1 6.031 15.358 1 1 0 0 1-1.414-1.414A7.002 7.002 0 0 0 12.26 5.005L12 5h-.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z",
        }),
      }))
);
ArrowRotationLeft.displayName = "ArrowRotationLeft";
export { ArrowRotationLeft };
export default ArrowRotationLeft;
