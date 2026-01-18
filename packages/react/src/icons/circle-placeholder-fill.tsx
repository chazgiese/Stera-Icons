import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CirclePlaceholderIconFill = memo(
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
          d="M4.222 4.222q.542-.539 1.134-.987l15.408 15.408q-.448.593-.986 1.135-.542.539-1.136.987L3.234 5.357c.3-.394.628-.775.988-1.135M16.898 21.85c-1.025.509-2.112.85-3.22 1.02L1.13 10.322c.17-1.109.51-2.196 1.02-3.22zM7.1 2.15a11 11 0 0 1 3.222-1.02L22.87 13.677a11 11 0 0 1-1.022 3.222zM10.926 22.947a10.95 10.95 0 0 1-6.704-3.169 10.96 10.96 0 0 1-3.17-6.705zM13.073 1.052a10.96 10.96 0 0 1 6.705 3.17 10.95 10.95 0 0 1 3.169 6.704z"
        />
      </svg>
    ))
);
CirclePlaceholderIconFill.displayName = "CirclePlaceholderIconFill";
export { CirclePlaceholderIconFill };
