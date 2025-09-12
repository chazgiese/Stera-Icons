const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularDownLeftFilled = memo(
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
          d: "M17.293 5.293a1 1 0 1 1 1.414 1.414L11.914 13.5l3.793 3.793A1 1 0 0 1 15 19H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1.707-.707l3.793 3.793z",
        }),
      }))
);
ArrowRegularDownLeftFilled.displayName = "ArrowRegularDownLeftFilled";
export { ArrowRegularDownLeftFilled };
export default ArrowRegularDownLeftFilled;
