import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsLeftIconFilled = memo(
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
          d="M9.94 3.94a1.5 1.5 0 1 1 2.12 2.12L6.121 12l5.94 5.94a1.5 1.5 0 1 1-2.122 2.12l-7-7a1.5 1.5 0 0 1 0-2.12z"
        />
        <path
          fill="currentColor"
          d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12L14.122 12l5.94 5.94a1.5 1.5 0 1 1-2.122 2.12l-7-7a1.5 1.5 0 0 1 0-2.12z"
        />
        <path
          fill="currentColor"
          d="M9.94 3.94a1.5 1.5 0 1 1 2.12 2.12L6.121 12l5.94 5.94a1.5 1.5 0 1 1-2.122 2.12l-7-7a1.5 1.5 0 0 1 0-2.12z"
        />
        <path
          fill="currentColor"
          d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12L14.122 12l5.94 5.94a1.5 1.5 0 1 1-2.122 2.12l-7-7a1.5 1.5 0 0 1 0-2.12z"
        />
      </svg>
    ))
);
ChevronsLeftIconFilled.displayName = "ChevronsLeftIconFilled";
export { ChevronsLeftIconFilled };
