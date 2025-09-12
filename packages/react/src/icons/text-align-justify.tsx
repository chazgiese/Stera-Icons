const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const TextAlignJustify = memo(
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
          d: "M21 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z",
        }),
      }))
);
TextAlignJustify.displayName = "TextAlignJustify";
export { TextAlignJustify };
