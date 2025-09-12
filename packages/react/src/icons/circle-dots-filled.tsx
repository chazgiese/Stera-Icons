import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const CircleDotsFilled = memo(
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
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.003 16a2 2 0 0 0-.002 4h.01a2 2 0 0 0-.002-4zm-3.534-1.467a2 2 0 1 0-2.823 2.834 2 2 0 1 0 2.827-2.83zm9.903 0a2 2 0 0 0-2.829 0l-.004.004a2 2 0 1 0 2.834 2.823 2 2 0 0 0 0-2.828M5.001 9.995a2 2 0 0 0-2.001 2v.009a2 2 0 0 0 4-.002v-.006a2 2 0 0 0-1.999-2m13.998 0A2 2 0 0 0 17 11.997v.006a2 2 0 0 0 4 .002v-.01a2 2 0 0 0-2.001-1.999M8.468 5.634a2 2 0 0 0-2.828-.001l-.007.007a2 2 0 1 0 2.83 2.827l.004-.004a2 2 0 0 0 0-2.83m9.892-.001a2 2 0 1 0-2.827 2.83l.004.004a2 2 0 1 0 2.823-2.834M11.995 3a2 2 0 0 0 .002 4h.006a2 2 0 0 0 .002-4z",
          clipRule: "evenodd",
        }),
      }))
);
CircleDotsFilled.displayName = "CircleDotsFilled";
export { CircleDotsFilled };
export default CircleDotsFilled;
