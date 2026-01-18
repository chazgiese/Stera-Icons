import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuoteIconDuotone = memo(
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
          d="M16.5 6.25c1.917 0 3.25 1.813 3.25 3.75 0 2.315-.383 4.215-1.163 5.563-.803 1.388-2.034 2.187-3.587 2.187a.75.75 0 0 1 0-1.5c.947 0 1.716-.45 2.288-1.438q.336-.577.564-1.396a2.9 2.9 0 0 1-1.352.334c-1.917 0-3.25-1.813-3.25-3.75s1.333-3.75 3.25-3.75m0 1.5c-.844 0-1.75.874-1.75 2.25 0 1.377.906 2.25 1.75 2.25s1.75-.873 1.75-2.25c0-1.376-.906-2.25-1.75-2.25"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.5 6.25c1.917 0 3.25 1.813 3.25 3.75 0 2.315-.383 4.215-1.163 5.563C8.784 16.952 7.553 17.75 6 17.75a.75.75 0 0 1 0-1.5c.947 0 1.716-.45 2.288-1.438q.336-.577.565-1.396a2.9 2.9 0 0 1-1.353.334c-1.917 0-3.25-1.813-3.25-3.75S5.583 6.25 7.5 6.25m0 1.5c-.844 0-1.75.874-1.75 2.25 0 1.377.906 2.25 1.75 2.25s1.75-.873 1.75-2.25c0-1.376-.906-2.25-1.75-2.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
QuoteIconDuotone.displayName = "QuoteIconDuotone";
export { QuoteIconDuotone };
