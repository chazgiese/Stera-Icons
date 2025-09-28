import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsUpFilled = memo(
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
          d="M17.94 12.06a1.5 1.5 0 1 0 2.12-2.12l-7-7a1.5 1.5 0 0 0-2.12 0l-7 7a1.5 1.5 0 1 0 2.12 2.12L12 6.122z"
        />
        <path
          fill="currentColor"
          d="M17.94 20.06a1.5 1.5 0 1 0 2.12-2.12l-7-7a1.5 1.5 0 0 0-2.12 0l-7 7a1.5 1.5 0 1 0 2.12 2.12L12 14.122z"
        />
      </svg>
    ))
);
ChevronsUpFilled.displayName = "ChevronsUpFilled";
export { ChevronsUpFilled };
