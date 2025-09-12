const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularDownRight = memo(
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
          d: "M6.707 5.293a1 1 0 1 0-1.414 1.414L15.586 17H8a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v7.586z",
        }),
      }))
);
ArrowRegularDownRight.displayName = "ArrowRegularDownRight";
export { ArrowRegularDownRight };
export default ArrowRegularDownRight;
