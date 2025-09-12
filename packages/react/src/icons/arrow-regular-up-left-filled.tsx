import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const ArrowRegularUpLeftFilled = memo(
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
          d: "M15 5a1 1 0 0 1 .707 1.707L11.914 10.5l6.793 6.793a1 1 0 1 1-1.414 1.414L10.5 11.914l-3.793 3.793A1 1 0 0 1 5 15V6a1 1 0 0 1 1-1z",
        }),
      }))
);
ArrowRegularUpLeftFilled.displayName = "ArrowRegularUpLeftFilled";
export { ArrowRegularUpLeftFilled };
export default ArrowRegularUpLeftFilled;
