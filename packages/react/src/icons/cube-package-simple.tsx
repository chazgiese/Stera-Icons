const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CubePackageSimple = memo(
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
          d: "M10.993 1.679a5 5 0 0 1 2.014 0c.786.162 1.509.575 2.587 1.174l2.6 1.444c1.137.632 1.912 1.048 2.483 1.668a5 5 0 0 1 1.071 1.82c.264.8.252 1.68.252 2.98v2.47c0 1.3.012 2.18-.252 2.98a5 5 0 0 1-1.071 1.82c-.571.62-1.346 1.036-2.484 1.668l-2.6 1.445c-1.077.598-1.8 1.012-2.586 1.173a5 5 0 0 1-2.014 0c-.786-.161-1.509-.575-2.587-1.173l-2.6-1.445c-1.137-.632-1.912-1.048-2.483-1.668a5 5 0 0 1-1.071-1.82c-.264-.8-.252-1.68-.252-2.98v-2.47c0-1.3-.012-2.18.252-2.98a5 5 0 0 1 1.071-1.82c.571-.62 1.346-1.036 2.484-1.668l2.6-1.444c1.077-.6 1.8-1.012 2.586-1.174m-6.92 7.06C4.007 9.124 4 9.671 4 10.766v2.469c0 1.439.012 1.931.151 2.353.134.405.354.778.643 1.092.301.327.725.576 1.983 1.275l2.6 1.445c.832.461 1.285.705 1.623.84v-7.652zM13 12.588v7.651c.338-.134.79-.378 1.622-.84l2.6-1.444c1.258-.699 1.683-.948 1.984-1.275.29-.314.509-.687.643-1.092.139-.422.151-.914.151-2.353v-2.47c0-1.095-.008-1.642-.072-2.027zM6.777 6.045c-.88.49-1.352.759-1.659.988L12 10.856l2.44-1.357L7.5 5.644zm5.828-2.407a3 3 0 0 0-1.21 0c-.393.08-.784.279-1.836.862l6.939 3.856 2.383-1.324c-.308-.229-.78-.498-1.658-.987l-2.601-1.444c-1.19-.662-1.603-.878-2.017-.963",
          clipRule: "evenodd",
        }),
      }))
);
CubePackageSimple.displayName = "CubePackageSimple";
export { CubePackageSimple };
