const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SendVerticalFilled = memo(
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
          d: "M9.988 2.79c.829-1.659 3.196-1.659 4.025 0l8.1 16.199c.983 1.97-1.157 4.035-3.09 2.981L13 18.685V11a1 1 0 0 0-2 0v7.684L4.978 21.97c-1.934 1.054-4.074-1.01-3.09-2.981z",
        }),
      }))
);
SendVerticalFilled.displayName = "SendVerticalFilled";
export { SendVerticalFilled };
export default SendVerticalFilled;
