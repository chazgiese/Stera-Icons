import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextQuoteIconBoldDuotone = memo(
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
          d="M3 11a1 1 0 0 1 1 1v6l-.005.102a1 1 0 0 1-1.99 0L2 18v-6a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
TextQuoteIconBoldDuotone.displayName = "TextQuoteIconBoldDuotone";
export { TextQuoteIconBoldDuotone };
