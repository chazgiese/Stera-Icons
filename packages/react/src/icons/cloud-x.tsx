const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CloudX = memo(
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
            d: "M22 14a4 4 0 0 0-4.273-3.99 1 1 0 0 1-1.01-.666A5.001 5.001 0 0 0 7 11l.003.105a1 1 0 0 1-1.25.989A3 3 0 1 0 5 18h13a4 4 0 0 0 4-4m2 0a6 6 0 0 1-6 6H5a5 5 0 0 1 0-10l.071.002A7 7 0 0 1 12 4a7 7 0 0 1 6.327 4.009A6 6 0 0 1 24 14",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M13.293 10.293a1 1 0 1 1 1.414 1.414L13.414 13l1.293 1.293a1 1 0 1 1-1.414 1.414L12 14.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L10.586 13l-1.293-1.293a1 1 0 1 1 1.414-1.414L12 11.586z",
          }),
        ],
      }))
);
CloudX.displayName = "CloudX";
export { CloudX };
