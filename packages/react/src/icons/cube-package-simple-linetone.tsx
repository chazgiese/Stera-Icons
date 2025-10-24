import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubePackageSimpleIconLinetone = memo(
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
          d="m16.499 8.355 4.016-2.229.97 1.748L13 12.588V22h-2v-9.412L2.515 7.874l.97-1.748L12 10.856l2.44-1.357-7.425-4.125.97-1.748z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.993 1.679a5 5 0 0 1 2.014 0c.786.162 1.509.575 2.587 1.174l2.6 1.444c1.137.632 1.912 1.048 2.483 1.668a5 5 0 0 1 1.071 1.82c.264.8.252 1.68.252 2.98v2.47c0 1.301.012 2.18-.252 2.98a5 5 0 0 1-1.071 1.82c-.571.62-1.346 1.036-2.484 1.668l-2.6 1.445c-1.077.598-1.8 1.012-2.586 1.173a5 5 0 0 1-2.014 0c-.786-.161-1.509-.575-2.587-1.173l-2.6-1.445c-1.137-.632-1.912-1.048-2.483-1.668a5 5 0 0 1-1.071-1.82c-.264-.8-.252-1.679-.252-2.98v-2.47c0-1.3-.012-2.18.252-2.98a5 5 0 0 1 1.071-1.82c.571-.62 1.346-1.036 2.484-1.668l2.6-1.444c1.077-.6 1.8-1.012 2.586-1.174m1.611 1.959a3 3 0 0 0-1.208 0c-.415.085-.828.301-2.018.963l-2.6 1.444c-1.259.699-1.683.949-1.984 1.275-.29.314-.509.687-.643 1.092-.14.422-.151.915-.151 2.354v2.469c0 1.439.012 1.931.151 2.353.134.405.354.778.643 1.092.301.327.725.576 1.983 1.275l2.6 1.445c1.191.66 1.604.877 2.018.962.4.082.81.082 1.21 0 .414-.085.827-.301 2.017-.962l2.6-1.445c1.258-.699 1.683-.948 1.984-1.275a3 3 0 0 0 .643-1.092c.139-.422.151-.914.151-2.353v-2.47c0-1.438-.012-1.93-.151-2.353a3 3 0 0 0-.643-1.092c-.301-.326-.725-.576-1.983-1.275l-2.601-1.444c-1.19-.662-1.603-.878-2.017-.963"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CubePackageSimpleIconLinetone.displayName = "CubePackageSimpleIconLinetone";
export { CubePackageSimpleIconLinetone };
