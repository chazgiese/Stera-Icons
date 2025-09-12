const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Ghost = memo(
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
            d: "M9 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1a9 9 0 0 1 9 9v11.995a1 1 0 0 1-1.555.837l-2.391-1.595-1.929 1.544a1 1 0 0 1-1.25 0L12 21.281l-1.875 1.5a1 1 0 0 1-1.25 0l-1.93-1.544-2.39 1.595A1 1 0 0 1 3 22V10a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7v10.13l1.445-.962.14-.078a1 1 0 0 1 1.04.129l1.875 1.5 1.875-1.5.144-.096a1 1 0 0 1 1.106.096l1.875 1.5 1.875-1.5.134-.09a1 1 0 0 1 1.046.039l1.445.963V10a7 7 0 0 0-7-7",
            clipRule: "evenodd",
          }),
        ],
      }))
);
Ghost.displayName = "Ghost";
export { Ghost };
export default Ghost;
