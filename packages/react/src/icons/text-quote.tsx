import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextQuoteIcon = memo(
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
          d="M3 11.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M21 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
TextQuoteIcon.displayName = "TextQuoteIcon";
export { TextQuoteIcon };
