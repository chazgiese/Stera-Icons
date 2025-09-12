const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowCircleDownRight = memo(
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
            d: "M9.17 7.758a1 1 0 0 0-1.413 1.414l5.364 5.364H8.464a1 1 0 0 0 0 2h7.071a1 1 0 0 0 1-1V8.465a1 1 0 0 0-2 0v4.657z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18",
            clipRule: "evenodd",
          }),
        ],
      }))
);
ArrowCircleDownRight.displayName = "ArrowCircleDownRight";
export { ArrowCircleDownRight };
