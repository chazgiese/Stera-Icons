import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuoteIconFill = memo(
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
          d="M7.5 6C9.596 6 11 7.97 11 10c0 2.337-.386 4.287-1.197 5.688C8.96 17.143 7.653 18 6 18a1 1 0 1 1 0-2c.846 0 1.539-.392 2.072-1.313a5 5 0 0 0 .38-.832A3.2 3.2 0 0 1 7.5 14C5.404 14 4 12.03 4 10s1.404-4 3.5-4M16.5 6c2.096 0 3.5 1.97 3.5 4 0 2.337-.386 4.287-1.197 5.688C17.96 17.143 16.653 18 15 18a1 1 0 1 1 0-2c.846 0 1.539-.392 2.072-1.313q.21-.364.38-.832A3.2 3.2 0 0 1 16.5 14c-2.096 0-3.5-1.97-3.5-4s1.404-4 3.5-4"
        />
      </svg>
    ))
);
QuoteIconFill.displayName = "QuoteIconFill";
export { QuoteIconFill };
