const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Spinner = memo(
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
          d: "M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M6.34 16.244a1 1 0 0 1 1.414 1.414L5.633 19.78a1 1 0 1 1-1.414-1.414zM16.24 16.244a1 1 0 0 1 1.413 0l2.121 2.121a1 1 0 0 1-1.414 1.414l-2.12-2.12a1 1 0 0 1 0-1.415M5 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM4.218 4.224c.39-.39 1.024-.39 1.415 0l2.12 2.12A1 1 0 0 1 6.34 7.76L4.218 5.638a1 1 0 0 1 0-1.414M18.36 4.224a1 1 0 1 1 1.414 1.414l-2.12 2.12a1 1 0 0 1-1.415-1.413zM12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1",
        }),
      }))
);
Spinner.displayName = "Spinner";
export { Spinner };
export default Spinner;
