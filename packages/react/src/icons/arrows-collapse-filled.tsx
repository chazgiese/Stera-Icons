const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowsCollapseFilled = memo(
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
          d: "M10 13a1 1 0 0 1 1 1v6a1 1 0 0 1-1.707.707L7 18.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L5.586 17l-2.293-2.293A1 1 0 0 1 4 13zM20.293 2.293a1 1 0 1 1 1.414 1.414L18.414 7l2.293 2.293A1 1 0 0 1 20 11h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1.707-.707L17 5.586z",
        }),
      }))
);
ArrowsCollapseFilled.displayName = "ArrowsCollapseFilled";
export { ArrowsCollapseFilled };
export default ArrowsCollapseFilled;
