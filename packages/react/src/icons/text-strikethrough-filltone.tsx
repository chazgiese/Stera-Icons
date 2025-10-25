import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextStrikethroughIconFilltone = memo(
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
          d="M17 1.5a1.5 1.5 0 0 1 0 3h-5.5a3 3 0 0 0 0 6h.5q.128 0 .25.021.122-.02.25-.021h1a6 6 0 0 1 0 12H7a1.5 1.5 0 0 1 0-3h6.5a3 3 0 1 0 0-6h-1q-.128-.001-.25-.023a1.5 1.5 0 0 1-.25.023h-.5a6 6 0 0 1 0-12z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M22.005 10.496a1.5 1.5 0 0 1 0 3h-20a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
TextStrikethroughIconFilltone.displayName = "TextStrikethroughIconFilltone";
export { TextStrikethroughIconFilltone };
