import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TallyMarksIconFill = memo(
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
          d="M6 2.5A1.5 1.5 0 0 0 4.5 4v10.75l-3.272 1.964a1.5 1.5 0 0 0 1.543 2.572l1.728-1.038V20a1.5 1.5 0 0 0 3 0v-3.552l1-.6V20a1.5 1.5 0 0 0 3 0v-5.951l1-.6V20a1.5 1.5 0 0 0 3 0v-8.35l1-.6V20a1.5 1.5 0 0 0 3 0V9.25l3.273-1.963a1.5 1.5 0 0 0-1.544-2.573L19.499 5.75V4a1.5 1.5 0 0 0-3 0v3.55l-1 .6V4a1.5 1.5 0 0 0-3 0v5.95l-1 .6V4a1.5 1.5 0 0 0-3 0v8.35l-1 .6V4A1.5 1.5 0 0 0 6 2.5"
        />
      </svg>
    ))
);
TallyMarksIconFill.displayName = "TallyMarksIconFill";
export { TallyMarksIconFill };
