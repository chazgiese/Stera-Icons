import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const CrosshairFilled = memo(
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
          d: "M12 1a1 1 0 0 1 1 1v2.063A8 8 0 0 1 19.936 11H22a1 1 0 1 1 0 2h-2.064A8 8 0 0 1 13 19.936V22a1 1 0 1 1-2 0v-2.064A8 8 0 0 1 4.064 13H2a1 1 0 1 1 0-2h2.064A8 8 0 0 1 11 4.063V2a1 1 0 0 1 1-1",
        }),
      }))
);
CrosshairFilled.displayName = "CrosshairFilled";
export { CrosshairFilled };
export default CrosshairFilled;
