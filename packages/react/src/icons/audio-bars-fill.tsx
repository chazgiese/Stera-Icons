import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AudioBarsIconFill = memo(
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
          d="M9 2.5A1.5 1.5 0 0 1 10.5 4v16a1.5 1.5 0 0 1-3 0V4A1.5 1.5 0 0 1 9 2.5M15 5.5A1.5 1.5 0 0 1 16.5 7v10a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 15 5.5M3 8.5A1.5 1.5 0 0 1 4.5 10v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 3 8.5M21 8.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 21 8.5"
        />
      </svg>
    ))
);
AudioBarsIconFill.displayName = "AudioBarsIconFill";
export { AudioBarsIconFill };
