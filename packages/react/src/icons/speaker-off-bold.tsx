import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpeakerOffBold = memo(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11.75V6.018c0-1.114-1.346-1.672-2.134-.884L11.62 7.38M9 9H7.25C6.56 9 6 9.56 6 10.25v3.5c0 .69.56 1.25 1.25 1.25h2.232c.332 0 .65.132.884.366l3.5 3.5c.788.788 2.134.23 2.134-.884V16M4 4l16 16"
        />
      </svg>
    ))
);
SpeakerOffBold.displayName = "SpeakerOffBold";
export { SpeakerOffBold };
