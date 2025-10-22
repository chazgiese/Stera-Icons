import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScissorsIcon = memo(
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
          d="M20.38 6.092a1.544 1.544 0 0 1 1.842.767.25.25 0 0 1-.097.33L7.613 15.569a3.25 3.25 0 1 1-.75-1.3l1.95-1.124 1.108-2.846a2.25 2.25 0 0 1 1.413-1.327zM6.016 15.625a1.75 1.75 0 1 0-3.031 1.752 1.75 1.75 0 0 0 3.031-1.752M11.5 10.5a.75.75 0 1 0 .002 1.502.75.75 0 0 0-.002-1.502"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M22.157 16.693a.25.25 0 0 1 .097.33c-.345.671-1.121.999-1.842.778l-9.038-2.77a2.3 2.3 0 0 1-.703-.363l3.991-2.303z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.718 5.754a3.25 3.25 0 0 1 5.926 2.559l1.904 1.1q-.197.286-.326.615l-.33.845-.05-.136-1.95-1.125a3.25 3.25 0 0 1-5.174-3.858m3.69.11a1.75 1.75 0 1 0-1.752 3.032 1.75 1.75 0 0 0 1.751-3.031"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScissorsIcon.displayName = "ScissorsIcon";
export { ScissorsIcon };
