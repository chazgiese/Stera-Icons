const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChevronFullCircleRight = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M10.117 6.576a1 1 0 0 1 1.09.217l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5A1 1 0 0 1 9.5 16.5v-9a1 1 0 0 1 .617-.924",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18",
            clipRule: "evenodd",
          }),
        ],
      }))
);
ChevronFullCircleRight.displayName = "ChevronFullCircleRight";
export { ChevronFullCircleRight };
