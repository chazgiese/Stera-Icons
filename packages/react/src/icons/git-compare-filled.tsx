const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const GitCompareFilled = memo(
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
          d: "M19 1.5a3.5 3.5 0 0 1 1 6.854V16a4 4 0 0 1-4 4h-2.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1-.087-.102q-.02-.025-.038-.051a1 1 0 0 1-.125-.263l-.013-.05a1 1 0 0 1 .263-.948l3-3a1 1 0 1 1 1.414 1.414L13.414 18H16a2 2 0 0 0 2-2V8.354A3.5 3.5 0 0 1 19 1.5M9.293 1.293a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 14 5q-.001.125-.031.24l-.013.051a1 1 0 0 1-.163.316 1 1 0 0 1-.086.1l-3 3a1 1 0 1 1-1.414-1.414L10.586 6H8a2 2 0 0 0-2 2v7.646a3.501 3.501 0 1 1-2 0V8a4 4 0 0 1 4-4h2.586L9.293 2.707a1 1 0 0 1 0-1.414",
        }),
      }))
);
GitCompareFilled.displayName = "GitCompareFilled";
export { GitCompareFilled };
