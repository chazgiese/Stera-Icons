const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const TriangleDown = memo(
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
          d: "M10.367 21.651a4 4 0 0 0 3.267 0c.7-.313 1.223-.897 1.705-1.586.486-.694 1.024-1.638 1.697-2.815l3.729-6.525c.664-1.163 1.197-2.094 1.545-2.856.345-.758.58-1.497.498-2.253a4 4 0 0 0-1.63-2.808c-.616-.447-1.374-.61-2.203-.686-.834-.077-1.908-.075-3.246-.075H8.272c-1.339 0-2.412-.002-3.246.075-.83.076-1.587.24-2.203.686a4 4 0 0 0-1.63 2.808c-.082.756.152 1.495.498 2.253.347.762.88 1.694 1.545 2.856l3.728 6.525c.673 1.177 1.212 2.121 1.697 2.815.483.69 1.006 1.273 1.706 1.586m2.45-1.825a2 2 0 0 1-1.633 0c-.194-.087-.46-.302-.884-.907-.42-.601-.907-1.45-1.6-2.661L4.972 9.732C4.289 8.536 3.812 7.7 3.51 7.04c-.302-.663-.352-.998-.33-1.208a2 2 0 0 1 .815-1.404c.172-.125.487-.247 1.212-.314.721-.066 1.686-.067 3.064-.067h7.457c1.377 0 2.342.001 3.063.067.726.067 1.04.19 1.212.314a2 2 0 0 1 .815 1.404c.022.21-.027.545-.33 1.208-.3.659-.777 1.496-1.46 2.692L15.3 16.258c-.693 1.212-1.179 2.06-1.6 2.66-.423.606-.69.821-.883.908",
          clipRule: "evenodd",
        }),
      }))
);
TriangleDown.displayName = "TriangleDown";
export { TriangleDown };
