import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommandIcon = memo(
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
          d="M18 2.25a3.75 3.75 0 1 1 0 7.5h-2.25v4.5H18A3.75 3.75 0 1 1 14.25 18v-2.25h-4.5V18A3.75 3.75 0 1 1 6 14.25h2.25v-4.5H6A3.75 3.75 0 1 1 9.75 6v2.25h4.5V6A3.75 3.75 0 0 1 18 2.25M6 15.75A2.25 2.25 0 1 0 8.25 18v-2.25zM15.75 18A2.25 2.25 0 1 0 18 15.75h-2.25zm-6-3.75h4.5v-4.5h-4.5zM6 3.75a2.25 2.25 0 0 0 0 4.5h2.25V6A2.25 2.25 0 0 0 6 3.75m12 0A2.25 2.25 0 0 0 15.75 6v2.25H18a2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CommandIcon.displayName = "CommandIcon";
export { CommandIcon };
