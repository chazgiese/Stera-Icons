const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowUpRightDownLeft = memo(
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
          d: "M20 3a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V6.414L6.414 19H11a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v4.586L17.586 5H13a1 1 0 1 1 0-2z",
        }),
      }))
);
ArrowUpRightDownLeft.displayName = "ArrowUpRightDownLeft";
export { ArrowUpRightDownLeft };
export default ArrowUpRightDownLeft;
