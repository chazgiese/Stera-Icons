const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ArrowsMove = memo(
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
          d: "M12 1a1 1 0 0 1 .707.293l3 3a1 1 0 1 1-1.414 1.414L13 4.414V11h6.586l-1.293-1.293a1 1 0 1 1 1.414-1.414l3 3 .066.073a1 1 0 0 1-.066 1.341l-3 3a1 1 0 1 1-1.414-1.414L19.586 13H13v6.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.34.066l-.074-.066-3-3a1 1 0 1 1 1.414-1.414L11 19.586V13H4.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1-.066-1.34l.066-.074 3-3a1 1 0 1 1 1.414 1.414L4.414 11H11V4.414L9.707 5.707a1 1 0 1 1-1.414-1.414l3-3 .073-.066A1 1 0 0 1 12 1",
        }),
      }))
);
ArrowsMove.displayName = "ArrowsMove";
export { ArrowsMove };
