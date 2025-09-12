const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const PlusCircleFilled = memo(
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
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m.006 5a1 1 0 0 0-1 1v3.994H7a1 1 0 0 0 0 2h4.006V17a1 1 0 1 0 2 0v-4.006H17a1 1 0 1 0 0-2h-3.994V7a1 1 0 0 0-1-1",
          clipRule: "evenodd",
        }),
      }))
);
PlusCircleFilled.displayName = "PlusCircleFilled";
export { PlusCircleFilled };
