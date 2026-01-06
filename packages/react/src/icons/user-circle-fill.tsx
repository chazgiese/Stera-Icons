import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserCircleIconFill = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 0 0-9 9c0 2.256.832 4.316 2.203 5.895a8.5 8.5 0 0 1 4.438-3.063 4.5 4.5 0 1 1 4.718 0 8.5 8.5 0 0 1 4.438 3.063A9 9 0 0 0 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserCircleIconFill.displayName = "UserCircleIconFill";
export { UserCircleIconFill };
