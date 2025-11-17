import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubePackageIconFilled = memo(
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
          d="M10.999 12.59v9.733l-.006-.002c-.786-.161-1.51-.575-2.587-1.173l-2.6-1.445c-1.137-.632-1.912-1.048-2.483-1.668a5 5 0 0 1-1.071-1.82c-.264-.8-.252-1.68-.252-2.98v-2.47c0-1.3-.012-2.18.252-2.98l.016-.047zM21.748 7.785c.264.8.252 1.68.252 2.98v2.47c0 1.3.012 2.18-.252 2.98a5 5 0 0 1-1.071 1.82c-.572.62-1.346 1.036-2.484 1.668l-2.6 1.445c-1.077.598-1.8 1.012-2.586 1.174h-.008V12.59l3.956-2.2c.037.256.045.643.045 1.434v.676a1 1 0 0 0 2 0v-.676c0-.958.012-1.666-.202-2.313l-.044-.12 2.976-1.653q.01.024.018.047M8.504 4.868l.01.006 6.532 3.63q.351.194.591.331L12 10.857 3.28 6.013l.043-.048c.571-.62 1.346-1.036 2.483-1.668l.86-.478zM10.993 1.679a5 5 0 0 1 2.014 0c.786.162 1.509.575 2.587 1.174l2.6 1.444c1.137.632 1.912 1.048 2.483 1.668l.042.048-3.114 1.728c-.417-.342-.938-.625-1.589-.987l-6.52-3.622-.784-.448c.913-.507 1.571-.86 2.281-1.005"
        />
      </svg>
    ))
);
CubePackageIconFilled.displayName = "CubePackageIconFilled";
export { CubePackageIconFilled };
