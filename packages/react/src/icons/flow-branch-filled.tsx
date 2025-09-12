const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FlowBranchFilled = memo(
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
          d: "M13.793 13.793a1 1 0 0 1 1.414 0l3.293 3.293 1.793-1.793A1 1 0 0 1 22 16v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-.707-1.707l1.793-1.793-3.293-3.293a1 1 0 0 1 0-1.414M21 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1.707.707L18.5 6.914l-4.035 4.036A7 7 0 0 1 9.515 13H2a1 1 0 1 1 0-2h7.515a5 5 0 0 0 3.535-1.465L17.085 5.5l-1.792-1.792A1 1 0 0 1 16 2z",
        }),
      }))
);
FlowBranchFilled.displayName = "FlowBranchFilled";
export { FlowBranchFilled };
export default FlowBranchFilled;
