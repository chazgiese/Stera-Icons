const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CursorNavigation = memo(
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
          d: "M9.988 2.79c.829-1.659 3.196-1.659 4.025 0l8.1 16.199c.983 1.97-1.157 4.035-3.09 2.981l-7.024-3.831-7.021 3.831C3.044 23.024.904 20.96 1.888 18.99zm2.236.894a.25.25 0 0 0-.447 0l-8.1 16.198a.23.23 0 0 0-.028.157.27.27 0 0 0 .078.135.27.27 0 0 0 .138.073.23.23 0 0 0 .156-.033l7.5-4.092c.298-.162.66-.162.958 0l7.5 4.092a.23.23 0 0 0 .157.033.27.27 0 0 0 .138-.073.27.27 0 0 0 .078-.135.23.23 0 0 0-.029-.157z",
          clipRule: "evenodd",
        }),
      }))
);
CursorNavigation.displayName = "CursorNavigation";
export { CursorNavigation };
export default CursorNavigation;
