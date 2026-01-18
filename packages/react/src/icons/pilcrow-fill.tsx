import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PilcrowIconFill = memo(
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
          d="M19 3a1 1 0 1 1 0 2h-1v15a1 1 0 1 1-2 0V5h-2v15a1 1 0 1 1-2 0v-5h-2a6 6 0 0 1 0-12z"
        />
      </svg>
    ))
);
PilcrowIconFill.displayName = "PilcrowIconFill";
export { PilcrowIconFill };
