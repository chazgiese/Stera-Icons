const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const DragHandle = memo(
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
          d: "M8.5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15.5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4M8.5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15.5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M8.5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15.5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4",
        }),
      }))
);
DragHandle.displayName = "DragHandle";
export { DragHandle };
export default DragHandle;
