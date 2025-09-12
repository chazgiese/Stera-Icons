var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CursorPointer = memo(
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
          d: "M10 1a3 3 0 0 1 3 3v2.174a2.996 2.996 0 0 1 3.527 1.214A3 3 0 0 1 21 10v4a9 9 0 0 1-17.857 1.6l-1.165-2.972a3 3 0 0 1 5.021-3.246V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v9a1 1 0 0 1-1.861.509l-1.65-2.794-.004-.008a.997.997 0 0 0-1.367-.366 1 1 0 0 0-.412 1.274l.047.092.065.135 1.221 3.116.034.099q.013.05.022.101A7 7 0 0 0 18.999 14v-4a1 1 0 1 0-2 0v1.5a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1",
          clipRule: "evenodd",
        }),
      }))
);
CursorPointer.displayName = "CursorPointer";
export { CursorPointer };
export default CursorPointer;
