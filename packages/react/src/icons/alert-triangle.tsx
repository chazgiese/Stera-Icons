const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const AlertTriangle = memo(
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
            d: "M11 12V9a1 1 0 1 1 2 0v3l-.005.102a1 1 0 0 1-1.99 0zM13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M10.366 2.396a4 4 0 0 1 3.268 0c.7.313 1.223.896 1.705 1.585.486.694 1.024 1.638 1.697 2.816l3.729 6.525c.664 1.162 1.197 2.094 1.545 2.856.345.757.58 1.496.498 2.253a4 4 0 0 1-1.63 2.808c-.616.447-1.374.61-2.203.686-.834.076-1.908.075-3.247.075H8.272c-1.338 0-2.412.001-3.246-.075-.829-.076-1.587-.24-2.203-.686a4 4 0 0 1-1.63-2.808c-.081-.757.153-1.496.498-2.253.348-.762.881-1.694 1.545-2.856l3.729-6.525C7.637 5.619 8.175 4.675 8.66 3.98c.482-.689 1.005-1.272 1.705-1.585m2.45 1.825a2 2 0 0 0-1.632 0c-.194.086-.46.301-.884.907-.42.6-.907 1.449-1.6 2.661l-3.728 6.526c-.684 1.196-1.161 2.033-1.461 2.692-.302.663-.352.997-.33 1.208a2 2 0 0 0 .815 1.404c.172.124.486.247 1.212.314.721.066 1.686.067 3.063.067h7.458c1.377 0 2.342-.001 3.063-.067.725-.067 1.04-.19 1.212-.314a2 2 0 0 0 .814-1.404c.023-.21-.027-.545-.329-1.208-.3-.659-.777-1.497-1.46-2.693l-3.73-6.525c-.692-1.212-1.178-2.06-1.599-2.661-.424-.606-.69-.82-.884-.907",
          }),
        ],
      }))
);
AlertTriangle.displayName = "AlertTriangle";
export { AlertTriangle };
