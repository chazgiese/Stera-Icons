const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const IdVerticalFilled = memo(
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
          d: "M13.6 1c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V15.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H10.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C2.999 17.59 3 16.703 3 15.599V8.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 5.73 1.544c.593-.302 1.233-.428 1.961-.487C8.41.999 9.297 1 10.401 1zM12 10.5a3.5 3.5 0 0 0-2.254 6.178 4.51 4.51 0 0 0-3.104 3.197.5.5 0 0 0 .484.625h9.748a.5.5 0 0 0 .484-.625 4.51 4.51 0 0 0-3.105-3.197A3.5 3.5 0 0 0 12 10.5M9 5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z",
          clipRule: "evenodd",
        }),
      }))
);
IdVerticalFilled.displayName = "IdVerticalFilled";
export { IdVerticalFilled };
