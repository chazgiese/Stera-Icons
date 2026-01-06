import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailBadgeIconFill = memo(
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
          d="m1.375 7.78 7.502 6.002a5 5 0 0 0 6.246 0l5.386-4.31q.242.028.491.028a4.5 4.5 0 0 0 2-.469V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7.499z"
        />
        <path
          fill="currentColor"
          d="M16.969 3a4.492 4.492 0 0 0 1.383 5.637l-4.478 3.583a3 3 0 0 1-3.748 0L2.625 6.219l-.013-.01L2.6 6.2l-1.216-.912A4 4 0 0 1 5 3zM21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
        />
      </svg>
    ))
);
MailBadgeIconFill.displayName = "MailBadgeIconFill";
export { MailBadgeIconFill };
