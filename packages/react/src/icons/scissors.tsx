import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Scissors = memo(
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
          d="M20.38 6.093a1.544 1.544 0 0 1 1.841.767.25.25 0 0 1-.096.33L7.613 15.568a3.25 3.25 0 1 1-.75-1.299l1.949-1.124L9.92 10.3a2.25 2.25 0 0 1 1.413-1.327zM6.015 15.625a1.75 1.75 0 1 0-3.03 1.752 1.75 1.75 0 0 0 3.03-1.752M11.5 10.5A.75.75 0 1 0 11.5 12 .75.75 0 0 0 11.5 10.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M22.157 16.691a.25.25 0 0 1 .096.331c-.344.671-1.12 1-1.841.778l-9.038-2.771a2.3 2.3 0 0 1-.702-.361l3.99-2.304z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.717 5.756a3.25 3.25 0 0 1 5.928 2.556l1.903 1.1a3 3 0 0 0-.327.615l-.33.846-.05-.137L6.894 9.61a3.25 3.25 0 0 1-5.177-3.855m3.69.11a1.75 1.75 0 1 0-1.751 3.032 1.75 1.75 0 0 0 1.75-3.031"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Scissors.displayName = "Scissors";
export { Scissors };
