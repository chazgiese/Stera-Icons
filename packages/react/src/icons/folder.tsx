const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Folder = memo(
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
          d: "M8.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 13.07 6H20a3 3 0 0 1 3 3v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a3 3 0 0 1 3-3zM3 12v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5zm1-7a1 1 0 0 0-1 1v4h18V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 8.93 5z",
          clipRule: "evenodd",
        }),
      }))
);
Folder.displayName = "Folder";
export { Folder };
