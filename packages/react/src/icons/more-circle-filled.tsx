const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const MoreCircleFilled = memo(
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
          fillRule: "evenodd",
          d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m14.5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0",
          clipRule: "evenodd",
        }),
      }))
);
MoreCircleFilled.displayName = "MoreCircleFilled";
export { MoreCircleFilled };
export default MoreCircleFilled;
