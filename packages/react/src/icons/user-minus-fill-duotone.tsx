import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserMinusIconFillDuotone = memo(
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
          d="M12 3.5a5 5 0 0 1 2.593 9.275c2.328.527 4.137 1.797 5.115 3.72H14a1 1 0 1 0 0 2h6.108c-.064.28-.21.578-.368.825-.173.274-.409.564-.662.739-.664.457-1.33.441-2.278.441H7.2c-.948 0-1.614.016-2.278-.441-.253-.175-.489-.465-.662-.739s-.337-.61-.387-.914a2.3 2.3 0 0 1 .016-.94c.066-.272.187-.526.31-.786.953-2.027 2.805-3.362 5.207-3.905A5 5 0 0 1 12 3.5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21 16.495a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
UserMinusIconFillDuotone.displayName = "UserMinusIconFillDuotone";
export { UserMinusIconFillDuotone };
