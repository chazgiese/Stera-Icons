const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CircleDots = memo(
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
          d: "M12.004 19a2 2 0 0 1 .002 4h-.012a2 2 0 0 1 .002-4zM4.219 16.945a2 2 0 0 1 2.834.007 2 2 0 0 1-2.826 2.83l-.01-.009a2 2 0 0 1 .002-2.828M16.952 16.947a2 2 0 0 1 2.83 2.826l-.009.01a2 2 0 1 1-2.826-2.83zM3.001 9.995A2 2 0 0 1 5 11.996v.008a2 2 0 1 1-4 .002v-.012a2 2 0 0 1 2.001-1.999M20.999 9.995a2 2 0 0 1 2.001 2v.01a2 2 0 0 1-4-.001v-.008a2 2 0 0 1 1.999-2M4.227 4.218a2 2 0 1 1 2.82 2.835 2 2 0 0 1-2.83-2.826zM16.945 4.219a2 2 0 0 1 2.828-.001l.01.009a2 2 0 1 1-2.836 2.82 2 2 0 0 1-.002-2.828M12.006 1a2 2 0 0 1-.002 4h-.008a2 2 0 0 1-.002-4z",
        }),
      }))
);
CircleDots.displayName = "CircleDots";
export { CircleDots };
export default CircleDots;
