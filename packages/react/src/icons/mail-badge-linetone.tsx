import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailBadgeIconLinetone = memo(
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
          d="M16.969 3a4.5 4.5 0 0 0-.469 2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.5a4.5 4.5 0 0 0 2-.469V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M16.969 3a4.5 4.5 0 0 0-.469 2H4.985l-.202.01a1.99 1.99 0 0 0-1.736 1.547l7.079 5.663a3 3 0 0 0 3.748 0l4.477-3.583a4.5 4.5 0 0 0 2.159.836l-5.387 4.31a5 5 0 0 1-6.246 0L1.387 7.79A1.03 1.03 0 0 1 1 6.985C1 4.785 2.784 3 4.985 3z"
        />
        <path fill="currentColor" d="M21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
      </svg>
    ))
);
MailBadgeIconLinetone.displayName = "MailBadgeIconLinetone";
export { MailBadgeIconLinetone };
