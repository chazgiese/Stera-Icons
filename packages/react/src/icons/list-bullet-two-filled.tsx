const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ListBulletTwoFilled = memo(
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
          d: "M4.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M21 14.5a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM4.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M21 7.5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z",
        }),
      }))
);
ListBulletTwoFilled.displayName = "ListBulletTwoFilled";
export { ListBulletTwoFilled };
export default ListBulletTwoFilled;
