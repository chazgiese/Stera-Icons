const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CropFilled = memo(
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
          d: "M6 1a1 1 0 0 1 1 1v3h7.8c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395V17h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H9.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C5 15.812 5 15.343 5 14.8V7H2a1 1 0 0 1 0-2h3V2a1 1 0 0 1 1-1",
        }),
      }))
);
CropFilled.displayName = "CropFilled";
export { CropFilled };
