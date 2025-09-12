const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChartBarFilled = memo(
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
          d: "M5.538 7.01A2 2 0 0 1 7.333 9v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.333zM13.166 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.333a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM21 10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2.333a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z",
        }),
      }))
);
ChartBarFilled.displayName = "ChartBarFilled";
export { ChartBarFilled };
export default ChartBarFilled;
