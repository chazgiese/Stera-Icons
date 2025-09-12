var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const TextAlignRightFilled = memo(
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
          d: "M7 17a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zM11 11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zM3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2z",
        }),
      }))
);
TextAlignRightFilled.displayName = "TextAlignRightFilled";
export { TextAlignRightFilled };
export default TextAlignRightFilled;
