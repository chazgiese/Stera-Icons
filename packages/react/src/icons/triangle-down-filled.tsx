const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const TriangleDownFilled = memo(
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
          d: "M10.367 21.651a4 4 0 0 0 3.267 0c.7-.313 1.223-.897 1.705-1.586.486-.694 1.024-1.638 1.697-2.815l3.729-6.525c.664-1.163 1.197-2.094 1.545-2.856.345-.758.58-1.497.498-2.253a4 4 0 0 0-1.63-2.808c-.616-.447-1.374-.61-2.203-.686-.834-.077-1.908-.075-3.246-.075H8.272c-1.339 0-2.412-.002-3.246.075-.83.076-1.587.24-2.203.686a4 4 0 0 0-1.63 2.808c-.082.756.152 1.495.498 2.253.347.762.88 1.694 1.545 2.856l3.728 6.525c.673 1.177 1.212 2.121 1.697 2.815.483.69 1.006 1.273 1.706 1.586",
        }),
      }))
);
TriangleDownFilled.displayName = "TriangleDownFilled";
export { TriangleDownFilled };
export default TriangleDownFilled;
