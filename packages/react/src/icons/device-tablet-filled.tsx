const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const DeviceTabletFilled = memo(
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
          d: "M16 1c.684 0 1.257-.001 1.724.037.478.04.933.125 1.365.345a3.5 3.5 0 0 1 1.53 1.53c.22.43.305.886.344 1.364C21 4.743 21 5.316 21 6v12c0 .684.001 1.257-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.886.305-1.364.344C17.257 23 16.684 23 16 23H8c-.684 0-1.257.001-1.724-.037-.478-.04-.933-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.305-.886-.344-1.364C3 19.257 3 18.684 3 18V6c0-.684-.001-1.257.037-1.724.04-.478.125-.933.345-1.365a3.5 3.5 0 0 1 1.53-1.53c.43-.22.886-.305 1.364-.344C6.743 1 7.316 1 8 1zm-4 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",
          clipRule: "evenodd",
        }),
      }))
);
DeviceTabletFilled.displayName = "DeviceTabletFilled";
export { DeviceTabletFilled };
