import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const IdHorizontal = memo(
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
            fillRule: "evenodd",
            d: "M8.83 8a3 3 0 0 1 3 3c0 .676-.227 1.298-.604 1.8a4 4 0 0 1 1.376 1.867 1 1 0 0 1-1.886.666 2.002 2.002 0 0 0-3.774 0 1 1 0 1 1-1.884-.666 4 4 0 0 1 1.375-1.868A3 3 0 0 1 5.829 11a3 3 0 0 1 3-3m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M18 13a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM18 9a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z",
            clipRule: "evenodd",
          }),
        ],
      }))
);
IdHorizontal.displayName = "IdHorizontal";
export { IdHorizontal };
export default IdHorizontal;
