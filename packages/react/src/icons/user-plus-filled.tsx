import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserPlusIconFilled = memo(
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
          d="M17.495 13a1 1 0 0 1 1 1v2.495H21a1 1 0 1 1 0 2h-2.505V21a1 1 0 0 1-2 0v-2.505H14a1 1 0 0 1 0-2h2.495V14a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M12 3.5a5 5 0 0 1 2.593 9.275q.453.104.88.243c-.145.297-.228.63-.228.982v1.245H14a2.25 2.25 0 0 0 0 4.5h1.245v.755H7.2c-.948 0-1.614.016-2.278-.441-.253-.175-.489-.465-.662-.739s-.337-.61-.387-.914a2.3 2.3 0 0 1 .016-.94c.066-.272.187-.526.31-.786.953-2.027 2.805-3.362 5.207-3.905A5 5 0 0 1 12 3.5"
        />
      </svg>
    ))
);
UserPlusIconFilled.displayName = "UserPlusIconFilled";
export { UserPlusIconFilled };
