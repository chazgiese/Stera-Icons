import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MenuFilled = memo(
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
          d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM7 16a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0-5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0-5a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MenuFilled.displayName = "MenuFilled";
export { MenuFilled };
