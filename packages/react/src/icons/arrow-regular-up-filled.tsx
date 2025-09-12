const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularUpFilled = memo(
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
          d: "M18.707 10.293A1 1 0 0 1 18 12h-5v7a1 1 0 0 1-2 0v-7H6a1 1 0 0 1-.707-1.707l6-6a1 1 0 0 1 1.414 0z",
        }),
      }))
);
ArrowRegularUpFilled.displayName = "ArrowRegularUpFilled";
export { ArrowRegularUpFilled };
export default ArrowRegularUpFilled;
