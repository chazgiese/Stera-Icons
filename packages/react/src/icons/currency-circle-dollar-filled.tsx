const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CurrencyCircleDollarFilled = memo(
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
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.25 3.5a1 1 0 0 0-1 1V7a3 3 0 0 0 0 6h3a1 1 0 1 1 0 2h-5a1 1 0 1 0 0 2h2.5v1.5a1 1 0 1 0 2 0V17h.5a3 3 0 1 0 0-6h-3a1 1 0 1 1 0-2h4a1 1 0 1 0 0-2h-2V5.5a1 1 0 0 0-1-1",
          clipRule: "evenodd",
        }),
      }))
);
CurrencyCircleDollarFilled.displayName = "CurrencyCircleDollarFilled";
export { CurrencyCircleDollarFilled };
export default CurrencyCircleDollarFilled;
