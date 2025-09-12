const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CodeFilled = memo(
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
          d: "M13.545 3.702a1 1 0 0 1 1.91.596l-5 16a1 1 0 0 1-1.909-.596zM5.793 6.793a1 1 0 1 1 1.414 1.414L3.414 12l3.793 3.793a1 1 0 0 1-1.414 1.414l-4.5-4.5a1 1 0 0 1 0-1.414zM16.793 6.793a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L20.586 12l-3.793-3.793a1 1 0 0 1 0-1.414",
        }),
      }))
);
CodeFilled.displayName = "CodeFilled";
export { CodeFilled };
export default CodeFilled;
