import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ChevronRegularDown = memo(
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
          d: "M4.293 8.293a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 1 0-1.414-1.414L12 14.586 5.707 8.293a1 1 0 0 0-1.414 0",
        }),
      }))
);
ChevronRegularDown.displayName = "ChevronRegularDown";
export { ChevronRegularDown };
export default ChevronRegularDown;
