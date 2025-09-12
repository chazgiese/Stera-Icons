const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChevronFullDown = memo(
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
          d: "M19 8a1 1 0 0 1 .707 1.707l-7 7a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 5 8zm-7 6.586L16.586 10H7.414z",
          clipRule: "evenodd",
        }),
      }))
);
ChevronFullDown.displayName = "ChevronFullDown";
export { ChevronFullDown };
