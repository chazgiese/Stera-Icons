var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CursorPointerFilled = memo(
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
          d: "M9.79 1c.961 0 1.74.778 1.74 1.737v8.105a.58.58 0 0 0 1.16 0V8.526c0-.959.78-1.736 1.74-1.737.96 0 1.74.778 1.74 1.737v2.895a.58.58 0 0 0 1.16 0v-1.184c0-.96.779-1.737 1.74-1.737.96 0 1.74.778 1.74 1.737v4.079c0 4.796-3.896 8.684-8.7 8.684a8.7 8.7 0 0 1-8.58-7.247l-.032-.117-1.418-3.608-.037-.078-.082-.158A1.737 1.737 0 0 1 3.83 9.366c.499.082.956.378 1.228.847l.002.005 1.912 3.234a.581.581 0 0 0 1.08-.294V2.737C8.05 1.777 8.83 1 9.79 1",
        }),
      }))
);
CursorPointerFilled.displayName = "CursorPointerFilled";
export { CursorPointerFilled };
export default CursorPointerFilled;
