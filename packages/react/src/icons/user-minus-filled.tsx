import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserMinusIconFilled = memo(
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
          d="M12 3.5a5 5 0 0 1 2.593 9.275c1.385.313 2.587.89 3.54 1.71.16.139.24.209.25.285a.2.2 0 0 1-.064.174c-.057.051-.168.051-.391.051H14a2.5 2.5 0 0 0-2.5 2.5V18.9c0 .56 0 .84-.11 1.054a1 1 0 0 1-.436.437c-.214.109-.494.109-1.054.109H7.2c-.948 0-1.614.016-2.278-.441-.253-.175-.489-.465-.662-.739s-.337-.61-.387-.914a2.3 2.3 0 0 1 .016-.94c.066-.272.187-.526.31-.786.953-2.027 2.805-3.362 5.207-3.905A5 5 0 0 1 12 3.5"
        />
        <path
          fill="currentColor"
          d="M21 16.495a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
UserMinusIconFilled.displayName = "UserMinusIconFilled";
export { UserMinusIconFilled };
