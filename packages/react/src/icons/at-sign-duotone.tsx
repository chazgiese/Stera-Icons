import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AtSignIconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75q0 .543-.053 1.074c-.26 2.63-1.82 4.248-3.636 4.396a.75.75 0 1 0-.122-1.495c.9-.073 2.054-.926 2.265-3.05q.046-.456.046-.925a9.25 9.25 0 1 0-4.626 8.013.751.751 0 0 1 .752 1.298A10.7 10.7 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25"
          opacity={0.4}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M16 8v5c0 2.596 1.501 3.844 3 3.722M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </svg>
    ))
);
AtSignIconDuotone.displayName = "AtSignIconDuotone";
export { AtSignIconDuotone };
