import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextStrikethroughIconLinetone = memo(
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
          d="M17 2a1 1 0 1 1 0 2h-5.5a3.5 3.5 0 1 0 0 7h.5a1 1 0 0 1 .25.032A1 1 0 0 1 12.5 11h1a5.5 5.5 0 1 1 0 11H7a1 1 0 1 1 0-2h6.5a3.5 3.5 0 1 0 0-7h-1a1 1 0 0 1-.25-.033A1 1 0 0 1 12 13h-.5a5.5 5.5 0 1 1 0-11z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M22.005 10.996a1 1 0 1 1 0 2h-20a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
TextStrikethroughIconLinetone.displayName = "TextStrikethroughIconLinetone";
export { TextStrikethroughIconLinetone };
