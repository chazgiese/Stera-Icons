const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const DropletFilled = memo(
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
          d: "M19.626 9.189c-.797-1.45-1.847-2.817-2.875-3.985a37 37 0 0 0-3.762-3.684C12.701 1.276 12.402 1 12 1c-.413 0-.694.271-.99.52A37 37 0 0 0 7.25 5.204C6.221 6.372 5.171 7.74 4.374 9.189 3.582 10.629 3 12.22 3 13.819 3 18.869 7.009 23 12 23s9-4.132 9-9.181c0-1.598-.582-3.19-1.374-4.63",
        }),
      }))
);
DropletFilled.displayName = "DropletFilled";
export { DropletFilled };
export default DropletFilled;
