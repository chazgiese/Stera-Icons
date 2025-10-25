import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CommandIconLinetone = memo(
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
          <path d="M16 14h2a4 4 0 1 1-4 4v-8h2zm0 4a2 2 0 1 0 2-2h-2zM6 2a4 4 0 0 1 4 4v8H8v-4H6a4 4 0 1 1 0-8m0 2a2 2 0 1 0 0 4h2V6a2 2 0 0 0-2-2" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14 16h-4v2a4 4 0 1 1-4-4h8zm-8 0a2 2 0 1 0 2 2v-2zM18 2a4 4 0 0 1 0 8h-8V8h4V6a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2h2a2 2 0 1 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CommandIconLinetone.displayName = "CommandIconLinetone";
export { CommandIconLinetone };
