import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsUp = memo(
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
          d="M18.47 11.53a.75.75 0 1 0 1.06-1.06l-7-7a.75.75 0 0 0-1.06 0l-7 7a.75.75 0 1 0 1.06 1.06L12 5.06z"
        />
        <path
          fill="currentColor"
          d="M18.47 19.53a.75.75 0 1 0 1.06-1.06l-7-7a.75.75 0 0 0-1.06 0l-7 7a.75.75 0 1 0 1.06 1.06L12 13.06z"
        />
      </svg>
    ))
);
ChevronsUp.displayName = "ChevronsUp";
export { ChevronsUp };
