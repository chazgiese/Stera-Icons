var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Pen = memo(
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
          d: "M18.25 1.621c1.053 0 2.155.37 2.957 1.172s1.172 1.904 1.172 2.957-.37 2.155-1.172 2.957l-12.5 12.5a1 1 0 0 1-.608.287l-5 .5A1 1 0 0 1 2.005 20.9l.5-5 .032-.168a1 1 0 0 1 .256-.439l12.5-12.499c.802-.802 1.904-1.172 2.957-1.172M4.459 16.453l-.343 3.429 3.429-.343 9.54-9.54-3.086-3.086zm13.79-12.832c-.61 0-1.173.217-1.542.586l-1.294 1.292 3.086 3.086 1.294-1.292c.369-.37.586-.932.586-1.543s-.217-1.174-.586-1.543c-.37-.37-.932-.586-1.543-.586",
          clipRule: "evenodd",
        }),
      }))
);
Pen.displayName = "Pen";
export { Pen };
export default Pen;
