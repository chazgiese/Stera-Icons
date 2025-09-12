const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChevronFullCircleLeftFilled = memo(
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
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m1.883 5.576a1 1 0 0 0-1.09.217l-4.5 4.5a1 1 0 0 0 0 1.414l4.5 4.5A1 1 0 0 0 14.5 16.5v-9a1 1 0 0 0-.617-.924",
          clipRule: "evenodd",
        }),
      }))
);
ChevronFullCircleLeftFilled.displayName = "ChevronFullCircleLeftFilled";
export { ChevronFullCircleLeftFilled };
