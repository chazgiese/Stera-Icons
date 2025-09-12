const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const BrightnessHigh = memo(
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
            d: "M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M6.34 16.244a1 1 0 0 1 1.414 1.414L5.633 19.78a1 1 0 1 1-1.414-1.414zM16.24 16.244a1 1 0 0 1 1.413 0l2.121 2.121a1 1 0 0 1-1.414 1.414l-2.12-2.12a1 1 0 0 1 0-1.415",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M5 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM4.219 4.224a1 1 0 0 1 1.414 0l2.12 2.12A1 1 0 0 1 6.34 7.76L4.219 5.638a1 1 0 0 1 0-1.414M18.36 4.224a1 1 0 1 1 1.414 1.414l-2.12 2.12a1 1 0 1 1-1.415-1.413zM12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1",
          }),
        ],
      }))
);
BrightnessHigh.displayName = "BrightnessHigh";
export { BrightnessHigh };
export default BrightnessHigh;
