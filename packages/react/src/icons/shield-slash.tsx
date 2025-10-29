import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldSlashIcon = memo(
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
          d="M4 6.798a.75.75 0 0 1 .75.75v3.036a11.25 11.25 0 0 0 6.219 10.062L12 21.16l1.031-.515a11.2 11.2 0 0 0 2.47-1.676.75.75 0 0 1 1 1.117 12.7 12.7 0 0 1-2.799 1.9l-1.367.684a.75.75 0 0 1-.67 0l-1.367-.684A12.75 12.75 0 0 1 3.25 10.584V7.548a.75.75 0 0 1 .75-.75M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 0 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06M11.737 1.298a.75.75 0 0 1 .527 0l8 3A.75.75 0 0 1 20.75 5v5.584c0 1.81-.384 3.563-1.09 5.16a.75.75 0 0 1-1.372-.607c.624-1.41.962-2.955.962-4.553V5.52L12 2.8 7.561 4.466a.75.75 0 1 1-.527-1.404z"
        />
      </svg>
    ))
);
ShieldSlashIcon.displayName = "ShieldSlashIcon";
export { ShieldSlashIcon };
