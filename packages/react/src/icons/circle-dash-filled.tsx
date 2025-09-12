const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CircleDashFilled = memo(
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
          d: "M13.758 20.83a1 1 0 1 1 .388 1.961A11 11 0 0 1 12 23q-1.1-.002-2.146-.209a1 1 0 0 1 .388-1.962Q11.096 21 12 21q.904-.002 1.758-.17M3.128 16.726A1 1 0 0 1 4.516 17 9.1 9.1 0 0 0 7 19.484a1 1 0 0 1-1.112 1.662 11.1 11.1 0 0 1-3.034-3.034 1 1 0 0 1 .274-1.386M19.484 17a1 1 0 0 1 1.662 1.112 11.1 11.1 0 0 1-3.034 3.035A1 1 0 1 1 17 19.484 9.1 9.1 0 0 0 19.484 17M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14M1.209 9.854a1 1 0 0 1 1.962.388A9 9 0 0 0 3 12q.002.904.17 1.758a1 1 0 1 1-1.961.388A11 11 0 0 1 1 12q.002-1.1.209-2.146M21.615 9.067a1 1 0 0 1 1.176.787Q22.998 10.9 23 12q-.002 1.1-.209 2.146a1 1 0 0 1-1.962-.388Q21 12.904 21 12q-.002-.904-.17-1.758a1 1 0 0 1 .785-1.175M5.888 2.854A1 1 0 1 1 7 4.516 9.1 9.1 0 0 0 4.516 7a1 1 0 0 1-1.662-1.112 11.1 11.1 0 0 1 3.034-3.034M16.726 3.128a1 1 0 0 1 1.386-.274c1.2.802 2.232 1.835 3.035 3.034A1 1 0 1 1 19.484 7 9.1 9.1 0 0 0 17 4.516a1 1 0 0 1-.274-1.388M12 1q1.1.002 2.146.209a1 1 0 0 1-.388 1.962A9 9 0 0 0 12 3q-.904.002-1.758.17a1 1 0 1 1-.388-1.961A11 11 0 0 1 12 1",
        }),
      }))
);
CircleDashFilled.displayName = "CircleDashFilled";
export { CircleDashFilled };
export default CircleDashFilled;
