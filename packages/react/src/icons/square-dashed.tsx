var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SquareDashed = memo(
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
          d: "M3 16.5a1 1 0 0 1 1 1v.04A2.46 2.46 0 0 0 6.46 20h.04a1 1 0 1 1 0 2h-.04A4.46 4.46 0 0 1 2 17.54v-.04a1 1 0 0 1 1-1M14 20a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM21 16.5a1 1 0 0 1 1 1v.04A4.46 4.46 0 0 1 17.54 22h-.04a1 1 0 1 1 0-2h.04A2.46 2.46 0 0 0 20 17.54v-.04a1 1 0 0 1 1-1M3.003 9.005a1 1 0 0 1 1 1l-.001 4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M21.003 9.005a1 1 0 0 1 1 1l-.001 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1M6.5 2a1 1 0 0 1 0 2h-.04A2.46 2.46 0 0 0 4 6.46v.04a1 1 0 0 1-2 0v-.04A4.46 4.46 0 0 1 6.46 2zM17.54 2A4.46 4.46 0 0 1 22 6.46v.04a1 1 0 1 1-2 0v-.04A2.46 2.46 0 0 0 17.54 4h-.04a1 1 0 1 1 0-2zM14 2a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z",
        }),
      }))
);
SquareDashed.displayName = "SquareDashed";
export { SquareDashed };
export default SquareDashed;
