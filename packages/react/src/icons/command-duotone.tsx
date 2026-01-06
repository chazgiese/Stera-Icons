import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommandIconDuotone = memo(
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
          d="M14.25 15.75h-4.5V18A3.75 3.75 0 1 1 6 14.25h8.25zm-8.25 0A2.25 2.25 0 1 0 8.25 18v-2.25zM18 2.25a3.75 3.75 0 1 1 0 7.5H9.75v-1.5h4.5V6A3.75 3.75 0 0 1 18 2.25m0 1.5A2.25 2.25 0 0 0 15.75 6v2.25H18a2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={0.4}
        >
          <path d="M15.75 14.25H18A3.75 3.75 0 1 1 14.25 18V9.75h1.5zm0 3.75A2.25 2.25 0 1 0 18 15.75h-2.25zM6 2.25A3.75 3.75 0 0 1 9.75 6v8.25h-1.5v-4.5H6a3.75 3.75 0 1 1 0-7.5m0 1.5a2.25 2.25 0 0 0 0 4.5h2.25V6A2.25 2.25 0 0 0 6 3.75" />
        </g>
      </svg>
    ))
);
CommandIconDuotone.displayName = "CommandIconDuotone";
export { CommandIconDuotone };
