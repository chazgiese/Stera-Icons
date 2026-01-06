import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailIconFillDuotone = memo(
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
          d="M1 6.99c.001.31.143.605.387.8l7.49 5.992a5 5 0 0 0 6.246 0l7.49-5.992a1.03 1.03 0 0 0 .386-.8L23 7v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6.99"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19.015 3A3.986 3.986 0 0 1 23 6.985c0 .313-.143.61-.387.805l-7.49 5.992a5 5 0 0 1-6.246 0L1.387 7.79A1.03 1.03 0 0 1 1 6.985C1 4.785 2.784 3 4.985 3z"
        />
      </svg>
    ))
);
MailIconFillDuotone.displayName = "MailIconFillDuotone";
export { MailIconFillDuotone };
