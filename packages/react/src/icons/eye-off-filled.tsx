const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const EyeOffFilled = memo(
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
          d: "M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414M3.196 8.14c.359-.419.994-.415 1.383-.026l10.108 10.108c.518.519.316 1.394-.403 1.544-.738.153-1.501.234-2.284.234-4.923 0-9.106-3.169-10.926-7.622a1 1 0 0 1 0-.756A12.8 12.8 0 0 1 3.196 8.14M12 4c4.924 0 9.107 3.169 10.926 7.622a1 1 0 0 1 0 .756 12.8 12.8 0 0 1-2.122 3.482c-.359.418-.994.415-1.384.025L9.313 5.777c-.52-.518-.317-1.395.402-1.544A11.3 11.3 0 0 1 12 4",
        }),
      }))
);
EyeOffFilled.displayName = "EyeOffFilled";
export { EyeOffFilled };
export default EyeOffFilled;
