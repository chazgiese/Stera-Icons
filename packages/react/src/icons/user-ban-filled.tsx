import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserBanIconFilled = memo(
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
          d="M18.5 14.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m-2.398 2.906a2.75 2.75 0 0 0 3.741 3.741zM18.5 15.75c-.485 0-.941.126-1.337.347l3.74 3.739A2.75 2.75 0 0 0 18.5 15.75"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 3.5a5 5 0 0 1 2.593 9.275q.172.04.342.084c.268.072.403.107.456.178.046.064.06.14.039.216-.024.085-.152.175-.407.356a5.99 5.99 0 0 0-2.18 6.891H7.2c-.948 0-1.614.016-2.278-.441-.253-.175-.489-.465-.662-.739s-.337-.61-.387-.914a2.3 2.3 0 0 1 .016-.94c.066-.272.187-.526.31-.786.953-2.027 2.805-3.362 5.207-3.905A5 5 0 0 1 12 3.5"
        />
      </svg>
    ))
);
UserBanIconFilled.displayName = "UserBanIconFilled";
export { UserBanIconFilled };
