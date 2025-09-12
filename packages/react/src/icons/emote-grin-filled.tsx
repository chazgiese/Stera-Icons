const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const EmoteGrinFilled = memo(
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
          d: "M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5M8 14a1 1 0 0 0-.8 1.6A6 6 0 0 0 12 18a6 6 0 0 0 4.8-2.4 1.002 1.002 0 0 0-.799-1.6zm.5-6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5",
          clipRule: "evenodd",
        }),
      }))
);
EmoteGrinFilled.displayName = "EmoteGrinFilled";
export { EmoteGrinFilled };
