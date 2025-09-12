var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CameraFilled = memo(
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
          d: "M13.287 3c.564 0 1.055-.01 1.515.13.377.114.728.302 1.033.552.37.305.635.72.947 1.188l.219.328c.253.38.309.456.362.509.14.14.318.235.512.273.074.015.166.02.624.02.854 0 1.518-.012 2.084.172a3.5 3.5 0 0 1 2.245 2.245c.184.565.172 1.23.172 2.084V16c0 .683 0 1.256-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.529c-.431.22-.886.306-1.364.345C19.256 21 18.684 21 18 21H6c-.684 0-1.257 0-1.724-.037-.478-.04-.933-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.53c-.22-.431-.305-.886-.344-1.364C.999 17.256 1 16.684 1 16v-5.5c0-.853-.012-1.518.172-2.083a3.5 3.5 0 0 1 2.245-2.245C3.983 5.988 4.647 6 5.5 6c.458 0 .55-.005.624-.02a1 1 0 0 0 .512-.273c.053-.053.108-.128.362-.509l.219-.328c.312-.469.576-.882.947-1.188.304-.25.656-.438 1.033-.552.46-.14.951-.13 1.515-.13zM12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
          clipRule: "evenodd",
        }),
      }))
);
CameraFilled.displayName = "CameraFilled";
export { CameraFilled };
export default CameraFilled;
