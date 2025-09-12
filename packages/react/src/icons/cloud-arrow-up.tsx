import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const CloudArrowUp = memo(
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
            d: "M22 14a4 4 0 0 0-4.273-3.99 1 1 0 0 1-1.01-.666A5.001 5.001 0 0 0 7 11l.003.105a1 1 0 0 1-1.25.989A3 3 0 1 0 5 18h3a1 1 0 1 1 0 2H5a5 5 0 0 1 0-10l.071.002A7 7 0 0 1 12 4a7 7 0 0 1 6.327 4.009A6 6 0 0 1 18 20h-2a1 1 0 1 1 0-2h2a4 4 0 0 0 4-4",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M16.707 15.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L11 13.414V19a1 1 0 1 0 2 0v-5.586l2.293 2.293a1 1 0 0 0 1.414 0",
          }),
        ],
      }))
);
CloudArrowUp.displayName = "CloudArrowUp";
export { CloudArrowUp };
export default CloudArrowUp;
