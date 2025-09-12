import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ArrowsRegularUpDownFilled = memo(
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
          d: "M17 3a1 1 0 0 1 1 1v13h3a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.338.068l-.076-.068-4-4A1 1 0 0 1 13 17h3V4a1 1 0 0 1 1-1M7 2a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 11 8H8v13a1 1 0 1 1-2 0V8H3a1 1 0 0 1-.707-1.707l4-4 .073-.066A1 1 0 0 1 7 2",
        }),
      }))
);
ArrowsRegularUpDownFilled.displayName = "ArrowsRegularUpDownFilled";
export { ArrowsRegularUpDownFilled };
export default ArrowsRegularUpDownFilled;
