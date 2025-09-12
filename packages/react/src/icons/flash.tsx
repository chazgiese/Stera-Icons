const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Flash = memo(
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
          d: "M15.715 1.249a1 1 0 0 1 1.612 1.057L15 9.556l4.327 1.499a1 1 0 0 1 .333 1.696l-11.375 10a1 1 0 0 1-1.612-1.057l2.326-7.252-4.326-1.497a1.002 1.002 0 0 1-.333-1.696zM6.95 11.616l3.627 1.257a1 1 0 0 1 .625 1.25l-1.52 4.736 7.367-6.476-3.626-1.256a1 1 0 0 1-.625-1.251l1.518-4.736z",
          clipRule: "evenodd",
        }),
      }))
);
Flash.displayName = "Flash";
export { Flash };
export default Flash;
