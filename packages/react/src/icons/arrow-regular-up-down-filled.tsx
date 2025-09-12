import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ArrowRegularUpDownFilled = memo(
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
          d: "M12 1a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 17 8h-4v8h4a1 1 0 0 1 .707 1.707l-5 5a1 1 0 0 1-1.414 0l-5-5A1 1 0 0 1 7 16h4V8H7a1 1 0 0 1-.707-1.707l5-5 .073-.066A1 1 0 0 1 12 1",
        }),
      }))
);
ArrowRegularUpDownFilled.displayName = "ArrowRegularUpDownFilled";
export { ArrowRegularUpDownFilled };
export default ArrowRegularUpDownFilled;
