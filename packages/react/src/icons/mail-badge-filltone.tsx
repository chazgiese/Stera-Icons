import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailBadgeIconFilltone = memo(
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
          d="M1 6.99c.001.31.143.605.387.8l7.49 5.992a5 5 0 0 0 6.246 0l5.386-4.31q.242.028.491.028a4.5 4.5 0 0 0 2-.469V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6.99"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.969 3a4.5 4.5 0 0 0 3.541 6.473l-5.387 4.31a5 5 0 0 1-6.246 0L1.387 7.79A1.03 1.03 0 0 1 1 6.985C1 4.785 2.784 3 4.985 3z"
        />
        <path fill="currentColor" d="M21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
      </svg>
    ))
);
MailBadgeIconFilltone.displayName = "MailBadgeIconFilltone";
export { MailBadgeIconFilltone };
