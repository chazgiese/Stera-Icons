const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CirclesThree = memo(
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
          d: "M6.5 11.526a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m11 0a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m-11 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m11 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M12 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
        }),
      }))
);
CirclesThree.displayName = "CirclesThree";
export { CirclesThree };
export default CirclesThree;
