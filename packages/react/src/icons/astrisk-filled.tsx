import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const AstriskFilled = memo(
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
          d: "M12 1a1 1 0 0 1 1 1v8.265l7.163-4.135a1 1 0 0 1 1 1.731l-7.16 4.133 7.165 4.136a1 1 0 1 1-1 1.731L13 13.723V22a1 1 0 1 1-2 0v-8.271L3.843 17.86a1 1 0 1 1-1-1.731l7.162-4.137-7.158-4.132a1 1 0 1 1 1-1.731L11 10.259V2a1 1 0 0 1 1-1",
        }),
      }))
);
AstriskFilled.displayName = "AstriskFilled";
export { AstriskFilled };
export default AstriskFilled;
