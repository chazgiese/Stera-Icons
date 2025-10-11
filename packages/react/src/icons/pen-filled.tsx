import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIconFilled = memo(
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
          d="m18.146 11.06-9.918 9.919-.178.018-4.988.498a.51.51 0 0 1-.558-.558l.5-4.988.017-.178 9.918-9.918zM18.25 2.121c.943 0 1.91.332 2.604 1.025.694.694 1.025 1.661 1.025 2.604s-.332 1.91-1.025 2.604L19.56 9.646l-5.207-5.208 1.294-1.292c.694-.693 1.66-1.025 2.603-1.025"
        />
      </svg>
    ))
);
PenIconFilled.displayName = "PenIconFilled";
export { PenIconFilled };
