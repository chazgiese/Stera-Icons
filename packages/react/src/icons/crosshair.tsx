var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Crosshair = memo(
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
          d: "M12 1a1 1 0 0 1 1 1v2.063A8 8 0 0 1 19.936 11H22a1 1 0 1 1 0 2h-2.064A8 8 0 0 1 13 19.936V22a1 1 0 1 1-2 0v-2.064A8 8 0 0 1 4.064 13H2a1 1 0 1 1 0-2h2.064A8 8 0 0 1 11 4.063V2a1 1 0 0 1 1-1M6.085 13A6 6 0 0 0 11 17.915V13zM13 13v4.915A6 6 0 0 0 17.915 13zm0-2h4.915A6 6 0 0 0 13 6.084zm-2-4.916A6 6 0 0 0 6.085 11H11z",
          clipRule: "evenodd",
        }),
      }))
);
Crosshair.displayName = "Crosshair";
export { Crosshair };
export default Crosshair;
