const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const DeviceLaptopFilled = memo(
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
          d: "M22.929 19.629A1 1 0 0 1 22 21H2a1 1 0 0 1-.929-1.371l1.326-3.315A.5.5 0 0 1 2.86 16H21.14a.5.5 0 0 1 .464.314zM17.6 3c.403 0 .767-.001 1.067.023.312.026.643.084.968.25.47.24.853.622 1.093 1.092.165.325.223.656.249.968.024.3.023.664.023 1.067v7.1a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5V6.4c0-.403-.001-.767.023-1.067.026-.312.084-.643.25-.968.24-.47.622-.853 1.092-1.093.325-.165.656-.223.968-.249C5.633 3 5.997 3 6.4 3z",
        }),
      }))
);
DeviceLaptopFilled.displayName = "DeviceLaptopFilled";
export { DeviceLaptopFilled };
