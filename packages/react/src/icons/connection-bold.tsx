import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ConnectionIconBold = memo(
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
          d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.5 2a4.5 4.5 0 0 1 3.809 6.895l4.796 4.795a4.5 4.5 0 1 1-1.414 1.414L8.894 10.31A4.5 4.5 0 1 1 6.5 2m11 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ConnectionIconBold.displayName = "ConnectionIconBold";
export { ConnectionIconBold };
