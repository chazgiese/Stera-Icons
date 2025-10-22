import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailBadgeIconBold = memo(
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
          d="M16.969 3a4.5 4.5 0 0 0-.469 2H4q-.14.001-.273.02a1.35 1.35 0 0 0-.618 2.386l6.017 4.814a3 3 0 0 0 3.748 0l4.991-3.994a4.5 4.5 0 0 0 1.846 1.086l-5.588 4.47a5 5 0 0 1-6.246 0L2 9.081V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.387a4.5 4.5 0 0 0 2 0V17a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 3.464-3.964l.06-.008a4 4 0 0 1 .244-.021l.102-.004q.042-.001.083-.003z"
        />
        <path fill="currentColor" d="M21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
      </svg>
    ))
);
MailBadgeIconBold.displayName = "MailBadgeIconBold";
export { MailBadgeIconBold };
