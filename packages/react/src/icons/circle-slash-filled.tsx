import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const CircleSlashFilled = memo(
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
          d: "M5.349 3.935a.482.482 0 0 1 .042-.728C9.701-.04 15.853.297 19.778 4.222s4.263 10.078 1.015 14.387a.482.482 0 0 1-.727.042zM4.222 19.778C.297 15.853-.04 9.7 3.208 5.391a.482.482 0 0 1 .727-.042L18.65 20.065a.482.482 0 0 1-.042.728c-4.31 3.248-10.462 2.91-14.387-1.015",
        }),
      }))
);
CircleSlashFilled.displayName = "CircleSlashFilled";
export { CircleSlashFilled };
export default CircleSlashFilled;
