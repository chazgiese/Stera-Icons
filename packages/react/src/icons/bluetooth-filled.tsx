const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const BluetoothFilled = memo(
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
          d: "M11.542 1.11a1 1 0 0 1 1.04.076l7 5a1 1 0 0 1 0 1.627L13.72 12l5.861 4.186a1 1 0 0 1 0 1.627l-7 5a1 1 0 0 1-1.58-.813v-8.058l-5.42 3.871a1 1 0 1 1-1.162-1.627L10.279 12 4.42 7.813a1 1 0 1 1 1.162-1.627l5.42 3.87V2a1 1 0 0 1 .541-.89M13 20.056 17.28 17 13 13.942zm0-10L17.28 7 13 3.942z",
          clipRule: "evenodd",
        }),
      }))
);
BluetoothFilled.displayName = "BluetoothFilled";
export { BluetoothFilled };
export default BluetoothFilled;
