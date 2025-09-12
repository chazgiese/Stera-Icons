import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ArrowCircleDownFilled = memo(
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
          fillRule: "evenodd",
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 5a1 1 0 0 0-1 1v7.586l-3.293-3.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L13 14.586V7a1 1 0 0 0-1-1",
          clipRule: "evenodd",
        }),
      }))
);
ArrowCircleDownFilled.displayName = "ArrowCircleDownFilled";
export { ArrowCircleDownFilled };
export default ArrowCircleDownFilled;
