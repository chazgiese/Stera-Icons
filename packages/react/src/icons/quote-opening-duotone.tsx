import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuoteOpeningIconDuotone = memo(
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
          d="M18 6.25a.75.75 0 0 1 0 1.5c-.947 0-1.716.45-2.288 1.438a6 6 0 0 0-.566 1.395c.404-.212.86-.333 1.354-.333 1.917 0 3.25 1.813 3.25 3.75s-1.333 3.75-3.25 3.75-3.25-1.813-3.25-3.75c0-2.315.383-4.215 1.163-5.563C15.216 7.05 16.447 6.25 18 6.25m-1.5 5.5c-.844 0-1.75.874-1.75 2.25 0 1.377.906 2.25 1.75 2.25s1.75-.873 1.75-2.25c0-1.376-.906-2.25-1.75-2.25"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 6.25a.75.75 0 0 1 0 1.5c-.947 0-1.716.45-2.288 1.438a6 6 0 0 0-.566 1.395c.404-.212.86-.333 1.354-.333 1.917 0 3.25 1.813 3.25 3.75s-1.333 3.75-3.25 3.75S4.25 15.937 4.25 14c0-2.315.383-4.215 1.163-5.563C6.216 7.05 7.447 6.25 9 6.25m-1.5 5.5c-.844 0-1.75.874-1.75 2.25 0 1.377.906 2.25 1.75 2.25s1.75-.873 1.75-2.25c0-1.376-.906-2.25-1.75-2.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
QuoteOpeningIconDuotone.displayName = "QuoteOpeningIconDuotone";
export { QuoteOpeningIconDuotone };
