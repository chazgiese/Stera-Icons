import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrickWallIconFilled = memo(
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
          d="M6 21H3.25A2.25 2.25 0 0 1 1 18.75v-2.417h5zM16 21H8v-4.667h8zM23 18.75A2.25 2.25 0 0 1 20.75 21H18v-4.667h5zM11 14.333H1V9.667h10zM23 14.333H13V9.667h10zM6 7.667H1V5.25A2.25 2.25 0 0 1 3.25 3H6zM16 7.667H8V3h8zM20.75 3A2.25 2.25 0 0 1 23 5.25v2.417h-5V3z"
        />
      </svg>
    ))
);
BrickWallIconFilled.displayName = "BrickWallIconFilled";
export { BrickWallIconFilled };
