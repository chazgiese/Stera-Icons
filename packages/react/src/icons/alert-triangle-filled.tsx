const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const AlertTriangleFilled = memo(
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
          d: "M10.367 2.395a4 4 0 0 1 3.267 0c.7.314 1.223.897 1.705 1.586.486.694 1.024 1.638 1.697 2.816l3.729 6.525c.664 1.162 1.197 2.094 1.545 2.856.345.757.58 1.496.498 2.253a4 4 0 0 1-1.63 2.808c-.616.446-1.374.61-2.203.686-.834.076-1.908.075-3.246.075H8.272c-1.339 0-2.412.001-3.246-.075-.83-.076-1.587-.24-2.203-.686a4 4 0 0 1-1.63-2.808c-.082-.757.152-1.496.498-2.253.347-.762.88-1.694 1.545-2.856l3.728-6.525c.673-1.178 1.212-2.122 1.697-2.816.483-.689 1.006-1.272 1.706-1.586M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7a1 1 0 0 0-1 1v3l.005.102a1 1 0 0 0 1.99 0L13 12V9a1 1 0 0 0-1-1",
          clipRule: "evenodd",
        }),
      }))
);
AlertTriangleFilled.displayName = "AlertTriangleFilled";
export { AlertTriangleFilled };
export default AlertTriangleFilled;
