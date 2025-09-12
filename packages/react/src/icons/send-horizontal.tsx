var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SendHorizontal = memo(
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
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m4.565 2.782 16.199 8.1c.921.46.921 1.775 0 2.236l-16.199 8.1c-1.095.547-2.243-.642-1.656-1.717L7 12 2.909 4.5c-.586-1.075.561-2.265 1.656-1.718M7 12h14",
        }),
      }))
);
SendHorizontal.displayName = "SendHorizontal";
export { SendHorizontal };
export default SendHorizontal;
