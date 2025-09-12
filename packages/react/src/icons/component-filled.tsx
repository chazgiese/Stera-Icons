const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ComponentFilled = memo(
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
          d: "M10.94 14.354a1.5 1.5 0 0 1 2.12 0l2.587 2.586a1.5 1.5 0 0 1 0 2.12l-2.586 2.587a1.5 1.5 0 0 1-2.121 0L8.354 19.06a1.5 1.5 0 0 1 0-2.121zM4.94 8.354a1.5 1.5 0 0 1 2.12 0l2.587 2.586a1.5 1.5 0 0 1 0 2.12L7.06 15.648a1.5 1.5 0 0 1-2.121 0L2.354 13.06a1.5 1.5 0 0 1 0-2.121zM16.94 8.354a1.5 1.5 0 0 1 2.12 0l2.587 2.586a1.5 1.5 0 0 1 0 2.12l-2.586 2.587a1.5 1.5 0 0 1-2.121 0l-2.586-2.586a1.5 1.5 0 0 1 0-2.121zM10.94 2.354a1.5 1.5 0 0 1 2.12 0l2.587 2.586a1.5 1.5 0 0 1 0 2.12L13.06 9.648a1.5 1.5 0 0 1-2.121 0L8.354 7.06a1.5 1.5 0 0 1 0-2.121z",
        }),
      }))
);
ComponentFilled.displayName = "ComponentFilled";
export { ComponentFilled };
