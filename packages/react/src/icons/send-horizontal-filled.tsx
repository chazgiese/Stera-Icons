const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SendHorizontalFilled = memo(
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
          d: "M1.65 4.278C.712 2.56 2.548.656 4.3 1.531L21.21 9.987c1.659.83 1.658 3.196 0 4.026L4.3 22.469c-1.751.875-3.587-1.028-2.65-2.747L5.317 13H13a1 1 0 0 0 0-2H5.317z",
        }),
      }))
);
SendHorizontalFilled.displayName = "SendHorizontalFilled";
export { SendHorizontalFilled };
