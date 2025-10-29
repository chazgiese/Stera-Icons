import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubePackageSimpleIconFilled = memo(
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
          d="M11 12.59v9.733l-.007-.002c-.786-.161-1.51-.575-2.587-1.173l-2.6-1.445c-1.137-.632-1.912-1.048-2.483-1.668a5 5 0 0 1-1.071-1.82c-.264-.8-.252-1.68-.252-2.98v-2.47c0-1.3-.012-2.18.252-2.98l.017-.047zM21.748 7.785c.264.8.252 1.68.252 2.98v2.47c0 1.3.012 2.18-.252 2.98a5 5 0 0 1-1.071 1.82c-.571.62-1.346 1.036-2.483 1.668l-2.6 1.445c-1.078.598-1.8 1.012-2.587 1.174h-.008V12.59l8.732-4.852zM15.392 8.972 12 10.857 3.28 6.013l.043-.048c.571-.62 1.346-1.036 2.484-1.668l.585-.326zM10.993 1.679a5 5 0 0 1 2.014 0c.786.162 1.51.575 2.587 1.174l2.6 1.444c1.137.632 1.912 1.048 2.483 1.668l.042.048-3.269 1.814-9-5c1.053-.585 1.768-.989 2.543-1.148"
        />
      </svg>
    ))
);
CubePackageSimpleIconFilled.displayName = "CubePackageSimpleIconFilled";
export { CubePackageSimpleIconFilled };
