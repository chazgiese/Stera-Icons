const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChevronRegularRightFilled = memo(
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
          d: "M8.617 4.076a1 1 0 0 1 1.09.217l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 8 19V5a1 1 0 0 1 .617-.924",
        }),
      }))
);
ChevronRegularRightFilled.displayName = "ChevronRegularRightFilled";
export { ChevronRegularRightFilled };
export default ChevronRegularRightFilled;
