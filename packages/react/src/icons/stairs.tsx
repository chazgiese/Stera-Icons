import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StairsIcon = memo(
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
          d="M22.5 2.75a.75.75 0 0 1 0 1.5h-4.917v5.917a.75.75 0 0 1-.75.75h-5.916v5.916a.75.75 0 0 1-.75.75H4.25V22.5a.75.75 0 0 1-1.5 0v-5.667a.75.75 0 0 1 .75-.75h5.917v-5.916a.75.75 0 0 1 .75-.75h5.916V3.5a.75.75 0 0 1 .75-.75z"
        />
      </svg>
    ))
);
StairsIcon.displayName = "StairsIcon";
export { StairsIcon };
