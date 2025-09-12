const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CursorTextFilled = memo(
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
          d: "M8 1c1.636 0 3.088.786 4 2a5 5 0 0 1 4-2h1a1 1 0 1 1 0 2h-1a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1a1 1 0 1 1 0 2h-1a5 5 0 0 1-4-2.001A5 5 0 0 1 8 23H7a1 1 0 1 1 0-2h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2z",
        }),
      }))
);
CursorTextFilled.displayName = "CursorTextFilled";
export { CursorTextFilled };
