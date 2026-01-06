import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserCircleIconFillDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 5.5a4.5 4.5 0 0 0-2.36 8.332c-2.18.629-3.999 2.106-5.078 4.05a.5.5 0 0 0-.062.242v.018a.5.5 0 0 0 .15.356A10.47 10.47 0 0 0 12 22.5c2.862 0 5.456-1.146 7.35-3.002a.5.5 0 0 0 .15-.356v-.018a.5.5 0 0 0-.062-.243 8.52 8.52 0 0 0-5.08-4.049A4.5 4.5 0 0 0 12 6.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 6.5a4.5 4.5 0 0 1 2.358 8.332 8.52 8.52 0 0 1 5.08 4.049.5.5 0 0 1 .062.243v.018a.5.5 0 0 1-.15.356A10.47 10.47 0 0 1 12 22.5a10.47 10.47 0 0 1-7.35-3.002.5.5 0 0 1-.15-.356v-.018a.5.5 0 0 1 .063-.242 8.52 8.52 0 0 1 5.078-4.05A4.5 4.5 0 0 1 12 6.5"
        />
      </svg>
    ))
);
UserCircleIconFillDuotone.displayName = "UserCircleIconFillDuotone";
export { UserCircleIconFillDuotone };
