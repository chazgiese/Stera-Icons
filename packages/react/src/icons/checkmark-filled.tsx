const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CheckmarkFilled = memo(
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
          d: "M19.269 5.317a1 1 0 0 1 1.463 1.366l-9.853 10.555c-.218.234-.426.458-.614.627-.195.175-.45.37-.79.469a2 2 0 0 1-1.39-.098 2.05 2.05 0 0 1-.717-.574c-.163-.194-.337-.445-.52-.707L3.18 11.717a1.001 1.001 0 0 1 1.638-1.148l3.667 5.24c.204.291.321.456.414.567l.013.014.015-.012c.108-.097.246-.244.49-.504z",
        }),
      }))
);
CheckmarkFilled.displayName = "CheckmarkFilled";
export { CheckmarkFilled };
export default CheckmarkFilled;
