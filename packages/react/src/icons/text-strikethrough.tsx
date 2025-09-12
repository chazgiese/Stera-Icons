const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const TextStrikethrough = memo(
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
          d: "M17 2a1 1 0 1 1 0 2h-5.5a3.5 3.5 0 0 0-.18 6.995h10.685a1 1 0 1 1 0 2h-4.267A5.5 5.5 0 0 1 13.5 22H7a1 1 0 1 1 0-2h6.5a3.5 3.5 0 1 0 0-7h-1q-.053 0-.102-.005h-.296A1 1 0 0 1 12 13h-.5q-.102 0-.202-.005H2.005a1 1 0 0 1 0-2h5.249A5.5 5.5 0 0 1 11.5 2z",
        }),
      }))
);
TextStrikethrough.displayName = "TextStrikethrough";
export { TextStrikethrough };
export default TextStrikethrough;
