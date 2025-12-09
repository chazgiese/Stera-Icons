import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailMinusIconFilled = memo(
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
          d="M19 3a4 4 0 0 1 4 4v6a1 1 0 1 1-2 0V8.76q-.007.007-.016.013l-6.016 4.814a4.75 4.75 0 0 1-5.936 0L3.016 8.773 3 8.76V17a2 2 0 0 0 2 2h8a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
        />
        <path
          fill="currentColor"
          d="M22 16.495a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
MailMinusIconFilled.displayName = "MailMinusIconFilled";
export { MailMinusIconFilled };
