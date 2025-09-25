import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommandFilled = memo(
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
          d="M18 1.75a4.25 4.25 0 0 1 0 8.5h-1.75v3.5H18A4.25 4.25 0 1 1 13.75 18v-1.75h-3.5V18A4.25 4.25 0 1 1 6 13.75h1.75v-3.5H6A4.25 4.25 0 1 1 10.25 6v1.75h3.5V6A4.25 4.25 0 0 1 18 1.75M6 16.25A1.75 1.75 0 1 0 7.75 18v-1.75zM16.25 18A1.75 1.75 0 1 0 18 16.25h-1.75zm-6-4.25h3.5v-3.5h-3.5zM6 4.25a1.75 1.75 0 1 0 0 3.5h1.75V6A1.75 1.75 0 0 0 6 4.25m12 0A1.75 1.75 0 0 0 16.25 6v1.75H18a1.75 1.75 0 1 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CommandFilled.displayName = "CommandFilled";
export { CommandFilled };
