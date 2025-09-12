const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChevronCircleLeftFilled = memo(
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
          fillRule: "evenodd",
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m2.207 5.793a1 1 0 0 0-1.414 0l-4.5 4.5a1 1 0 0 0 0 1.414l4.5 4.5a1 1 0 1 0 1.414-1.414L10.414 12l3.793-3.793a1 1 0 0 0 0-1.414",
          clipRule: "evenodd",
        }),
      }))
);
ChevronCircleLeftFilled.displayName = "ChevronCircleLeftFilled";
export { ChevronCircleLeftFilled };
