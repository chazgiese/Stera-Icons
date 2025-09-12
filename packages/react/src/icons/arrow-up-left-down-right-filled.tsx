var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowUpLeftDownRightFilled = memo(
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
          d: "M3.897 3.005A1 1 0 0 0 3 4v7a1 1 0 0 0 1.707.707L7.5 8.914l7.586 7.586-2.793 2.793A1 1 0 0 0 13 21h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1.707-.707L16.5 15.086 8.914 7.5l2.793-2.793A1 1 0 0 0 11 3H4z",
        }),
      }))
);
ArrowUpLeftDownRightFilled.displayName = "ArrowUpLeftDownRightFilled";
export { ArrowUpLeftDownRightFilled };
export default ArrowUpLeftDownRightFilled;
