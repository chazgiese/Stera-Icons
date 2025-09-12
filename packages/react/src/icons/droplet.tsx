const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Droplet = memo(
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
          d: "M16.751 5.203c1.028 1.169 2.078 2.536 2.875 3.986.792 1.44 1.374 3.032 1.374 4.63C21 18.867 16.992 23 12 23s-9-4.132-9-9.182c0-1.597.582-3.189 1.374-4.63.797-1.449 1.847-2.816 2.875-3.985 1.255-1.426 2.617-2.833 4.13-3.985.371-.283.88-.29 1.243 0a33.7 33.7 0 0 1 4.129 3.985m-8 1.321c-.972 1.105-1.922 2.35-2.625 3.628C5.418 11.44 5 12.69 5 13.818 5 17.806 8.155 21 12 21s7-3.194 7-7.182c0-1.13-.418-2.379-1.126-3.666-.703-1.277-1.653-2.523-2.625-3.628A35 35 0 0 0 12 3.308c-.73.633-1.994 1.79-3.249 3.216",
          clipRule: "evenodd",
        }),
      }))
);
Droplet.displayName = "Droplet";
export { Droplet };
export default Droplet;
