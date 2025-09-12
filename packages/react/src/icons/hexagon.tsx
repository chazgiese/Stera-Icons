const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Hexagon = memo(
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
          d: "M13.911 2c1.244 0 2.083-.01 2.855.233a5 5 0 0 1 1.771.994c.61.53 1.04 1.253 1.688 2.314l1.588 2.6c.704 1.152 1.19 1.922 1.38 2.771a5 5 0 0 1 0 2.176c-.19.849-.676 1.62-1.38 2.77l-1.588 2.601c-.649 1.061-1.077 1.784-1.688 2.314a5 5 0 0 1-1.771.994c-.772.244-1.611.233-2.855.233H10.09c-1.244 0-2.083.01-2.855-.233a5 5 0 0 1-1.771-.994c-.61-.53-1.04-1.253-1.688-2.314l-1.588-2.6c-.704-1.152-1.19-1.922-1.38-2.771a5 5 0 0 1 0-2.176c.19-.849.676-1.62 1.38-2.77L3.775 5.54c.649-1.061 1.077-1.784 1.688-2.314a5 5 0 0 1 1.771-.994C8.006 1.99 8.845 2 10.09 2zM10.09 4c-1.374 0-1.844.01-2.251.14a3 3 0 0 0-1.063.596c-.322.28-.577.675-1.294 1.848l-1.588 2.6C3.115 10.458 2.86 10.9 2.76 11.348c-.096.43-.096.876 0 1.306.1.448.355.89 1.133 2.162l1.588 2.601c.717 1.173.972 1.567 1.294 1.848.31.269.672.473 1.063.596.407.13.877.14 2.25.14h3.823c1.374 0 1.844-.01 2.251-.14a3 3 0 0 0 1.063-.596c.322-.28.577-.675 1.293-1.848l1.59-2.6c.777-1.273 1.032-1.715 1.132-2.163.096-.43.096-.876 0-1.306-.1-.448-.355-.89-1.133-2.162L18.52 6.584c-.717-1.173-.972-1.568-1.294-1.848a3 3 0 0 0-1.063-.596c-.407-.13-.877-.14-2.25-.14z",
        }),
      }))
);
Hexagon.displayName = "Hexagon";
export { Hexagon };
