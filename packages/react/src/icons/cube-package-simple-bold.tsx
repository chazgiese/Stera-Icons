import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubePackageSimpleIconBold = memo(
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
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.993 1.679a5 5 0 0 1 2.014 0c.786.162 1.51.575 2.587 1.174l2.6 1.444c1.137.632 1.912 1.048 2.483 1.668a5 5 0 0 1 1.071 1.82c.264.8.252 1.68.252 2.98v2.47c0 1.301.012 2.18-.252 2.98a5 5 0 0 1-1.071 1.82c-.571.62-1.346 1.036-2.483 1.668l-2.6 1.445c-1.078.598-1.8 1.012-2.587 1.173a5 5 0 0 1-2.014 0c-.786-.161-1.509-.575-2.587-1.173l-2.6-1.445c-1.137-.632-1.912-1.048-2.483-1.668a5 5 0 0 1-1.071-1.82c-.264-.8-.252-1.679-.252-2.98v-2.47c0-1.3-.012-2.18.252-2.98a5 5 0 0 1 1.071-1.82c.571-.62 1.346-1.036 2.484-1.668l2.6-1.444c1.077-.6 1.8-1.012 2.586-1.174m-6.92 7.06C4.007 9.124 4 9.671 4 10.766v2.469c0 1.439.012 1.931.151 2.353.134.405.354.778.643 1.092.301.327.725.576 1.983 1.275L9.378 19.4c.831.461 1.284.705 1.622.84v-7.652zM13 12.588v7.651c.338-.134.79-.378 1.622-.84l2.6-1.444c1.259-.699 1.683-.948 1.984-1.275a3 3 0 0 0 .643-1.092c.14-.422.151-.914.151-2.353v-2.47c0-1.095-.007-1.642-.072-2.027zM6.777 6.045c-.88.49-1.351.759-1.659.988L12 10.856l2.44-1.357L7.5 5.644zm5.828-2.407a3 3 0 0 0-1.21 0c-.393.08-.783.279-1.836.862l6.94 3.856 2.382-1.324c-.307-.229-.779-.498-1.658-.987l-2.6-1.444c-1.191-.662-1.604-.878-2.018-.963"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CubePackageSimpleIconBold.displayName = "CubePackageSimpleIconBold";
export { CubePackageSimpleIconBold };
