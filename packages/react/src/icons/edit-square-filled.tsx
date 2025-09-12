const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const EditSquareFilled = memo(
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
          d: "M16.343 2.01a4 4 0 0 1 5.644 5.648Q22 7.828 22 8v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h8q.173 0 .343.01m4.071 1.576a2 2 0 0 0-2.828 0l-.001-.001-7.89 8.096-.504 3.182 3.343-.365 7.871-8.074.01-.01a2 2 0 0 0 0-2.828",
          clipRule: "evenodd",
        }),
      }))
);
EditSquareFilled.displayName = "EditSquareFilled";
export { EditSquareFilled };
