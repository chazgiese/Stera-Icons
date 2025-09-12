const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularDownRightFilled = memo(
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
          d: "M5.293 5.293a1 1 0 0 1 1.414 0l6.793 6.793 3.793-3.793A1 1 0 0 1 19 9v9a1 1 0 0 1-1 1H9a1 1 0 0 1-.707-1.707l3.793-3.793-6.793-6.793a1 1 0 0 1 0-1.414",
        }),
      }))
);
ArrowRegularDownRightFilled.displayName = "ArrowRegularDownRightFilled";
export { ArrowRegularDownRightFilled };
