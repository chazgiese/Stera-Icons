import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const Globe = memo(
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
          d: "M12 1c6.075 0 11 4.925 11 11 0 6.06-4.9 10.974-10.955 10.998h-.006L12 23l-.037-.002h-.019C5.894 22.967 1 18.056 1 12 1 5.925 5.925 1 12 1M3.057 13a9.005 9.005 0 0 0 6.698 7.717A15.9 15.9 0 0 1 7.195 13zm13.748 0a15.9 15.9 0 0 1-2.56 7.717A9.005 9.005 0 0 0 20.942 13zm-7.603 0A13.9 13.9 0 0 0 12 20.43 13.9 13.9 0 0 0 14.798 13zm.553-9.718A9.01 9.01 0 0 0 3.057 11h4.138a15.9 15.9 0 0 1 2.56-7.718M12 3.568A13.9 13.9 0 0 0 9.202 11h5.596A13.9 13.9 0 0 0 12 3.568m2.244-.286A15.9 15.9 0 0 1 16.804 11h4.14a9.01 9.01 0 0 0-6.7-7.718",
          clipRule: "evenodd",
        }),
      }))
);
Globe.displayName = "Globe";
export { Globe };
export default Globe;
