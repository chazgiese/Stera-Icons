import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubePackageSimpleIconFill = memo(
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
          d="M10.993 1.679a5 5 0 0 1 2.014 0c.786.162 1.509.575 2.587 1.174l2.6 1.444c1.137.632 1.912 1.048 2.483 1.668a5 5 0 0 1 1.071 1.82c.264.8.252 1.68.252 2.98v2.47c0 1.301.012 2.18-.252 2.98a5 5 0 0 1-1.071 1.82c-.571.62-1.346 1.036-2.484 1.668l-2.6 1.445c-1.077.598-1.8 1.012-2.586 1.173a5 5 0 0 1-2.014 0c-.786-.161-1.509-.575-2.587-1.173l-2.6-1.445c-1.137-.632-1.912-1.048-2.483-1.668a5 5 0 0 1-1.071-1.82c-.264-.8-.252-1.679-.252-2.98v-2.47c0-1.3-.012-2.18.252-2.98a5 5 0 0 1 1.071-1.82c.571-.62 1.346-1.036 2.484-1.668l2.6-1.444c1.077-.6 1.8-1.012 2.586-1.174M13 12.588v7.651c.338-.134.79-.378 1.622-.84l2.6-1.444c1.258-.699 1.683-.948 1.984-1.275a3 3 0 0 0 .643-1.092c.139-.422.151-.914.151-2.353v-2.47c0-1.095-.008-1.642-.072-2.027zM6.777 6.045c-.88.49-1.352.759-1.659.988L12 10.856l2.44-1.357L7.5 5.644zm5.828-2.407a3 3 0 0 0-1.21 0c-.393.08-.784.279-1.836.862l6.939 3.856 2.383-1.324c-.308-.229-.78-.498-1.658-.987l-2.601-1.444c-1.19-.662-1.603-.878-2.017-.963"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CubePackageSimpleIconFill.displayName = "CubePackageSimpleIconFill";
export { CubePackageSimpleIconFill };
