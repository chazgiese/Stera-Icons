const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CurrencyDollar = memo(
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
          d: "M12 1a1 1 0 0 1 1 1v3h4a1 1 0 1 1 0 2h-4v4h2a4 4 0 0 1 0 8h-2v3a1 1 0 1 1-2 0v-3H7a1 1 0 1 1 0-2h4v-4h-1a4 4 0 0 1 0-8h1V2a1 1 0 0 1 1-1m1 16h2a2 2 0 1 0 0-4h-2zM10 7a2 2 0 1 0 0 4h1V7z",
          clipRule: "evenodd",
        }),
      }))
);
CurrencyDollar.displayName = "CurrencyDollar";
export { CurrencyDollar };
export default CurrencyDollar;
