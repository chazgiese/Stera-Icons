import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsUpIconDuotone = memo(
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
          d="M12 3.25c.199 0 .39.08.53.22l7 7a.75.75 0 1 1-1.06 1.06L12 5.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06l7-7a.75.75 0 0 1 .53-.22"
        />
        <path
          fill="currentColor"
          d="M12 11.25c.199 0 .39.08.53.22l7 7a.75.75 0 1 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06l7-7a.75.75 0 0 1 .53-.22"
          opacity={0.4}
        />
      </svg>
    ))
);
ChevronsUpIconDuotone.displayName = "ChevronsUpIconDuotone";
export { ChevronsUpIconDuotone };
