import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ArrowRotateCircleLeft = memo(
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
            d: "M10.293 5.293a1 1 0 1 1 1.414 1.414L10.414 8H12.5a5 5 0 1 1-4.084 7.886 1 1 0 0 1 1.633-1.155A3 3 0 1 0 12.5 10h-2.086l1.293 1.292a1 1 0 1 1-1.414 1.414l-2.93-2.93a1.1 1.1 0 0 1 0-1.554z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18",
            clipRule: "evenodd",
          }),
        ],
      }))
);
ArrowRotateCircleLeft.displayName = "ArrowRotateCircleLeft";
export { ArrowRotateCircleLeft };
export default ArrowRotateCircleLeft;
