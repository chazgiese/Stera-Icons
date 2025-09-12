const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ChartBar = memo(
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
          d: "M4.833 7a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H3.5A2.5 2.5 0 0 1 1 18.5v-9A2.5 2.5 0 0 1 3.5 7zM3.5 9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1.333a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM12.666 3a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5h-1.333a2.5 2.5 0 0 1-2.5-2.5v-13a2.5 2.5 0 0 1 2.5-2.5zm-1.333 2a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h1.333a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM20.5 10a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5h-1.333a2.5 2.5 0 0 1-2.5-2.5v-6a2.5 2.5 0 0 1 2.5-2.5zm-1.333 2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5H20.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z",
          clipRule: "evenodd",
        }),
      }))
);
ChartBar.displayName = "ChartBar";
export { ChartBar };
export default ChartBar;
