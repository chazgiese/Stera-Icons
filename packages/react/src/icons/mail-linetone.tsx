import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailIconLinetone = memo(
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
          fillRule="evenodd"
          d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.22 3.005A3.986 3.986 0 0 1 23 6.985c0 .313-.142.61-.387.805l-7.49 5.992a5 5 0 0 1-6.246 0L1.387 7.79A1.03 1.03 0 0 1 1 6.985C1 4.785 2.784 3 4.985 3h14.03zM4.783 5.01a1.99 1.99 0 0 0-1.736 1.547l7.079 5.663a3 3 0 0 0 3.748 0l7.078-5.663a1.99 1.99 0 0 0-1.735-1.547L19.015 5H4.985z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailIconLinetone.displayName = "MailIconLinetone";
export { MailIconLinetone };
