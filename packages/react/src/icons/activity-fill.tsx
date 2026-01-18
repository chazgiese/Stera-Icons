import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ActivityIconFill = memo(
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
          d="M9 1.5a1.5 1.5 0 0 1 1.423 1.025l4.576 13.73 1.293-3.875a2.75 2.75 0 0 1 2.61-1.88H22a1.5 1.5 0 0 1 0 3h-2.919l-2.658 7.975a1.5 1.5 0 0 1-2.846 0L9 7.743 7.708 11.62a2.75 2.75 0 0 1-2.61 1.881H2a1.5 1.5 0 0 1 0-3h2.919l2.658-7.975.042-.112A1.5 1.5 0 0 1 9 1.5"
        />
      </svg>
    ))
);
ActivityIconFill.displayName = "ActivityIconFill";
export { ActivityIconFill };
