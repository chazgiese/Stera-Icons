const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ListBulletFilled = memo(
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
          d: "M3 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM3 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z",
        }),
      }))
);
ListBulletFilled.displayName = "ListBulletFilled";
export { ListBulletFilled };
export default ListBulletFilled;
