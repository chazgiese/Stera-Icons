import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIconFillDuotone = memo(
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
          d="M18.25 1.871c.998 0 2.032.35 2.78 1.099.748.748 1.099 1.782 1.099 2.78s-.35 2.032-1.099 2.78l-1.97 1.97-5.56-5.56 1.97-1.97c.748-.748 1.782-1.099 2.78-1.099"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19.06 10.5 8.53 21.03a.75.75 0 0 1-.396.207l-5.5 1.001a.75.75 0 0 1-.873-.872l1-5.5c.028-.15.1-.29.208-.397L13.5 4.939z"
        />
      </svg>
    ))
);
PenIconFillDuotone.displayName = "PenIconFillDuotone";
export { PenIconFillDuotone };
