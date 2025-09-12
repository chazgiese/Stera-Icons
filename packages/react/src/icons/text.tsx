import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const Text = memo(
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
          d: "M18 2a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3z",
        }),
      }))
);
Text.displayName = "Text";
export { Text };
export default Text;
