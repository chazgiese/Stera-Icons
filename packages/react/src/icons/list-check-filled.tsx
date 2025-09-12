const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ListCheckFilled = memo(
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
          d: "M5.269 15.817a1.001 1.001 0 0 1 1.462 1.365l-2.8 3a1 1 0 0 1-1.55-.11l-1.2-1.713a1 1 0 0 1 1.638-1.147l.492.702zM22 17a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zM5.269 9.817a1.001 1.001 0 0 1 1.462 1.365l-2.8 3a1 1 0 0 1-1.55-.11l-1.2-1.713a1 1 0 0 1 1.638-1.147l.492.702zM22 11a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zM5.269 3.817A1.001 1.001 0 0 1 6.73 5.182l-2.8 3a1 1 0 0 1-1.55-.11L1.18 6.36a1 1 0 0 1 1.638-1.147l.492.702zM22 5a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z",
        }),
      }))
);
ListCheckFilled.displayName = "ListCheckFilled";
export { ListCheckFilled };
export default ListCheckFilled;
