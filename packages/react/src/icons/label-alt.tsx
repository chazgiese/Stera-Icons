const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const LabelAlt = memo(
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
          d: "M20.908 3.006c1.67.115 2.652 1.985 1.744 3.436l-3.141 5.028a1 1 0 0 0 0 1.06l3.142 5.028c.936 1.498-.14 3.442-1.908 3.442H7.11a3 3 0 0 1-2.544-1.41l-3.75-6a3 3 0 0 1 0-3.18l3.75-6A3 3 0 0 1 7.109 3h13.636zM6.981 5.008a1 1 0 0 0-.72.462l-3.75 6a1 1 0 0 0 0 1.06l3.75 6a1 1 0 0 0 .848.47h13.636a.25.25 0 0 0 .212-.383l-3.142-5.027a3 3 0 0 1 0-3.18l3.142-5.027a.25.25 0 0 0-.142-.373l-.07-.01H7.11z",
          clipRule: "evenodd",
        }),
      }))
);
LabelAlt.displayName = "LabelAlt";
export { LabelAlt };
