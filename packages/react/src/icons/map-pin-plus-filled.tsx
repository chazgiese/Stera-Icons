const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const MapPinPlusFilled = memo(
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
          d: "M12 1.001c4.991 0 9 4.132 9 9.182 0 1.597-.582 3.189-1.374 4.63-.797 1.449-1.847 2.816-2.875 3.985a37 37 0 0 1-3.762 3.683q-.171.144-.266.221-.05.043-.1.081a1 1 0 0 1-1.245 0c-.13-.087-.248-.201-.367-.302a36.754 36.754 0 0 1-3.762-3.684c-1.028-1.168-2.078-2.535-2.875-3.985C3.582 13.373 3 11.78 3 10.183c0-5.049 4.009-9.181 9-9.181M12 6a1 1 0 0 0-1 1v2H9a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7a1 1 0 0 0-1-1",
          clipRule: "evenodd",
        }),
      }))
);
MapPinPlusFilled.displayName = "MapPinPlusFilled";
export { MapPinPlusFilled };
export default MapPinPlusFilled;
