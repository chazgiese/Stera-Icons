import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const Bolt = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M13.912 2c1.243 0 2.083-.01 2.854.233a5 5 0 0 1 1.772.994c.61.53 1.039 1.253 1.687 2.314l1.589 2.6c.703 1.151 1.19 1.922 1.379 2.771a5 5 0 0 1 0 2.176c-.19.849-.676 1.62-1.38 2.77l-1.588 2.6c-.648 1.062-1.077 1.785-1.687 2.315a5 5 0 0 1-1.772.994c-.771.244-1.611.233-2.854.233h-3.823c-1.243 0-2.083.01-2.854-.233a5 5 0 0 1-1.772-.994c-.61-.53-1.039-1.253-1.687-2.314l-1.59-2.6C1.485 14.706.998 13.936.809 13.087a5 5 0 0 1 0-2.176c.19-.849.676-1.62 1.379-2.77L3.776 5.54c.648-1.061 1.077-1.784 1.687-2.314a5 5 0 0 1 1.772-.994C8.006 1.99 8.845 2 10.089 2zm-3.823 2c-1.373 0-1.844.01-2.25.14a3 3 0 0 0-1.063.596c-.322.28-.577.675-1.294 1.848l-1.589 2.6C3.115 10.458 2.86 10.9 2.76 11.348c-.096.43-.096.876 0 1.306.1.448.355.89 1.133 2.162l1.589 2.6c.717 1.174.972 1.569 1.294 1.849.31.269.671.472 1.062.596.407.129.877.14 2.251.14h3.823c1.373 0 1.844-.01 2.25-.14a3 3 0 0 0 1.063-.596c.322-.28.577-.675 1.294-1.848l1.589-2.6c.777-1.273 1.033-1.715 1.133-2.163.096-.43.096-.876 0-1.306-.1-.448-.355-.89-1.133-2.162l-1.589-2.601c-.717-1.173-.972-1.568-1.294-1.848a3 3 0 0 0-1.062-.596c-.407-.13-.878-.14-2.251-.14z",
            clipRule: "evenodd",
          }),
        ],
      }))
);
Bolt.displayName = "Bolt";
export { Bolt };
export default Bolt;
