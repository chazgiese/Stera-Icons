const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowCircleDownRightFilled = memo(
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
          d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M7.757 7.758a1 1 0 0 1 1.414 0l5.364 5.364V8.465a1 1 0 0 1 2 0v7.071a1 1 0 0 1-1 1H8.464a1.001 1.001 0 0 1 0-2h4.657L7.757 9.172a1 1 0 0 1 0-1.414",
          clipRule: "evenodd",
        }),
      }))
);
ArrowCircleDownRightFilled.displayName = "ArrowCircleDownRightFilled";
export { ArrowCircleDownRightFilled };
export default ArrowCircleDownRightFilled;
