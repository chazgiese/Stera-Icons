import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailIconFilltone = memo(
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
          d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M19.015 3A3.986 3.986 0 0 1 23 6.985c0 .313-.143.61-.387.805l-7.49 5.992a5 5 0 0 1-6.246 0L1.387 7.79A1.03 1.03 0 0 1 1 6.985C1 4.785 2.784 3 4.985 3z"
        />
      </svg>
    ))
);
MailIconFilltone.displayName = "MailIconFilltone";
export { MailIconFilltone };
