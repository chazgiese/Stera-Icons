const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const TextItalic = memo(
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
          d: "M20 2a1 1 0 1 1 0 2h-2.838a2 2 0 0 0-1.897 1.367l-4.41 13.23-.029.087A1 1 0 0 0 11.774 20H14a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.838c.85 0 1.605-.538 1.886-1.339l4.45-13.35A1 1 0 0 0 12.227 4H10a1 1 0 0 1 0-2z",
        }),
      }))
);
TextItalic.displayName = "TextItalic";
export { TextItalic };
export default TextItalic;
