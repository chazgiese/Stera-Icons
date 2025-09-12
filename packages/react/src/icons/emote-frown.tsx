const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const EmoteFrown = memo(
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
            d: "M12 13.5c1.963 0 3.708.944 4.8 2.4a1.001 1.001 0 0 1-1.599 1.2A4 4 0 0 0 12 15.5a4 4 0 0 0-3.2 1.6 1 1 0 0 1-1.6-1.2 6 6 0 0 1 4.8-2.4M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5",
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
EmoteFrown.displayName = "EmoteFrown";
export { EmoteFrown };
