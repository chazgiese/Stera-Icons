import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommandIconFilltone = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={0.4}
        >
          <path d="M16.5 13.5H18a4.5 4.5 0 1 1-4.5 4.5v-7.5h3zm0 4.5a1.5 1.5 0 1 0 1.5-1.5h-1.5zM6 1.5A4.5 4.5 0 0 1 10.5 6v7.5h-3v-3H6a4.5 4.5 0 0 1 0-9m0 3a1.5 1.5 0 1 0 0 3h1.5V6A1.5 1.5 0 0 0 6 4.5" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.5 16.5h-3V18A4.5 4.5 0 1 1 6 13.5h7.5zm-7.5 0A1.5 1.5 0 1 0 7.5 18v-1.5zM18 1.5a4.5 4.5 0 1 1 0 9h-7.5v-3h3V6A4.5 4.5 0 0 1 18 1.5m0 3A1.5 1.5 0 0 0 16.5 6v1.5H18a1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CommandIconFilltone.displayName = "CommandIconFilltone";
export { CommandIconFilltone };
