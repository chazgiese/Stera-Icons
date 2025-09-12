const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowRegularUpRight = memo(
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
          d: "M6.707 18.707a1 1 0 1 1-1.414-1.414L15.586 7H8a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V8.414z",
        }),
      }))
);
ArrowRegularUpRight.displayName = "ArrowRegularUpRight";
export { ArrowRegularUpRight };
