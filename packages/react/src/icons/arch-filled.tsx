var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArchFilled = memo(
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
          d: "M12 1a9 9 0 0 1 9 9v9a4 4 0 0 1-4 4H7a4 4 0 0 1-3.995-3.794L3 19v-9a9 9 0 0 1 9-9",
        }),
      }))
);
ArchFilled.displayName = "ArchFilled";
export { ArchFilled };
export default ArchFilled;
