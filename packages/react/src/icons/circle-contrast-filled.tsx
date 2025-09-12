const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CircleContrastFilled = memo(
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
          d: "M10.91 1.004C5.341 1.513 1 6.252 1 12s4.342 10.487 9.91 10.996q.167.014.328-.026c.252.017.506.03.762.03 6.075 0 11-4.925 11-11S18.075 1 12 1q-.384.002-.762.03a1 1 0 0 0-.329-.026M12 3a9 9 0 0 1 0 18z",
          clipRule: "evenodd",
        }),
      }))
);
CircleContrastFilled.displayName = "CircleContrastFilled";
export { CircleContrastFilled };
export default CircleContrastFilled;
