const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const StarHalf = memo(
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
          d: "M10.56 1.945c.528-1.22 2.224-1.259 2.825-.115l.055.115 2.311 5.348 5.825.538c1.364.126 1.93 1.826.889 2.737l-4.393 3.842 1.286 5.678c.306 1.35-1.154 2.386-2.328 1.692L12 18.806 6.97 21.78c-1.174.694-2.634-.342-2.328-1.692l1.285-5.678-4.392-3.842c-1.04-.91-.475-2.61.889-2.737l5.824-.538zM12 16.735c.207 0 .415.041.61.123l.189.096 4.386 2.594-1.12-4.95a1.57 1.57 0 0 1 .496-1.523l3.823-3.345-5.07-.468a1.57 1.57 0 0 1-1.295-.939L12 3.654z",
          clipRule: "evenodd",
        }),
      }))
);
StarHalf.displayName = "StarHalf";
export { StarHalf };
export default StarHalf;
