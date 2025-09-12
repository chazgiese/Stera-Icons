import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const Eye = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 4c4.924 0 9.107 3.169 10.926 7.622a1 1 0 0 1 0 .756C21.106 16.83 16.924 20 12 20c-4.923 0-9.106-3.169-10.926-7.622a1 1 0 0 1 0-.756C2.894 7.17 7.077 4 12 4m0 2C8.113 6 4.71 8.42 3.088 12c1.62 3.58 5.025 6 8.912 6s7.29-2.42 8.911-6c-1.62-3.58-5.024-6-8.91-6",
            clipRule: "evenodd",
          }),
        ],
      }))
);
Eye.displayName = "Eye";
export { Eye };
export default Eye;
