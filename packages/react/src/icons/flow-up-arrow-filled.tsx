import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const FlowUpArrowFilled = memo(
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
          d: "M17.707 7.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 4.414v8.687A5.001 5.001 0 0 0 12 23a5 5 0 0 0 1-9.9V4.415l3.293 3.293a1 1 0 0 0 1.414 0",
        }),
      }))
);
FlowUpArrowFilled.displayName = "FlowUpArrowFilled";
export { FlowUpArrowFilled };
export default FlowUpArrowFilled;
