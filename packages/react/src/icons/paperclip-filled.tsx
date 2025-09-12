const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const PaperclipFilled = memo(
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
          d: "M10 1a5 5 0 0 1 5 5v9a3 3 0 1 1-6 0V8a1 1 0 0 1 2 0v7a1 1 0 1 0 2 0V6a3 3 0 1 0-6 0v10a5 5 0 0 0 10 0V8a1 1 0 1 1 2 0v8a7 7 0 1 1-14 0V6a5 5 0 0 1 5-5",
        }),
      }))
);
PaperclipFilled.displayName = "PaperclipFilled";
export { PaperclipFilled };
export default PaperclipFilled;
