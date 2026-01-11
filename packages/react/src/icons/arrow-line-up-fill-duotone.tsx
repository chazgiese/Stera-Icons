import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineUpIconFillDuotone = memo(
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
          d="M20 2a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.918 6.668a1.53 1.53 0 0 1 2.164 0l5.857 5.857c.913.913.267 2.475-1.025 2.475H13v6a1 1 0 1 1-2 0v-6H6.086c-1.292 0-1.938-1.562-1.024-2.476z"
        />
      </svg>
    ))
);
ArrowLineUpIconFillDuotone.displayName = "ArrowLineUpIconFillDuotone";
export { ArrowLineUpIconFillDuotone };
