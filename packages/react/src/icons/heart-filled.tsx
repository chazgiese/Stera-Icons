const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const HeartFilled = memo(
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
          d: "M16.762 2C20.225 2 23 4.856 23 8.339c0 2.641-1.392 4.68-1.9 5.406-2.484 3.544-5.95 5.977-8.468 8.03a1 1 0 0 1-1.264 0C8.85 19.722 5.384 17.29 2.9 13.746 2.392 13.02 1 10.98 1 8.34 1 4.856 3.775 2 7.238 2A6.18 6.18 0 0 1 12 4.247 6.18 6.18 0 0 1 16.762 2",
        }),
      }))
);
HeartFilled.displayName = "HeartFilled";
export { HeartFilled };
export default HeartFilled;
