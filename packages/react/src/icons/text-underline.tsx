var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const TextUnderline = memo(
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
          d: "M19 21a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zM18 1a1 1 0 0 1 1 1v10a7 7 0 1 1-14 0V2a1 1 0 0 1 2 0v10a5 5 0 0 0 10 0V2a1 1 0 0 1 1-1",
        }),
      }))
);
TextUnderline.displayName = "TextUnderline";
export { TextUnderline };
export default TextUnderline;
