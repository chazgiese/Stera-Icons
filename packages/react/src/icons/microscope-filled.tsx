import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicroscopeFilled = memo(
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
          d="M16 1a4 4 0 0 1 4 4v5.75a2.25 2.25 0 0 1-2.001 2.235L18 13a2 2 0 1 1-4 0v-.015a2.25 2.25 0 0 1-2-2.235V8h-.5a6.5 6.5 0 1 0 0 13H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.025A8.5 8.5 0 0 1 11.5 6h.5V5a4 4 0 0 1 4-4"
        />
        <path fill="currentColor" d="M19 17a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
MicroscopeFilled.displayName = "MicroscopeFilled";
export { MicroscopeFilled };
