import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserCircleBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 15a6.99 6.99 0 0 0-5.714 2.954A8.96 8.96 0 0 0 12 21c2.17 0 4.159-.768 5.713-2.046A6.99 6.99 0 0 0 12 16m0-13a9 9 0 0 0-7.122 14.499A9 9 0 0 1 8.6 14.665a5 5 0 1 1 6.798 0 9 9 0 0 1 3.722 2.834A8.96 8.96 0 0 0 21 12a9 9 0 0 0-9-9m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserCircleBold.displayName = "UserCircleBold";
export { UserCircleBold };
