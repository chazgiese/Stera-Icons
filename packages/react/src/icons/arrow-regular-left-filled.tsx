const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularLeftFilled = memo(
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
          d: "M10.293 5.293A1 1 0 0 1 12 6v5h7a1 1 0 1 1 0 2h-7v5a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.414z",
        }),
      }))
);
ArrowRegularLeftFilled.displayName = "ArrowRegularLeftFilled";
export { ArrowRegularLeftFilled };
export default ArrowRegularLeftFilled;
