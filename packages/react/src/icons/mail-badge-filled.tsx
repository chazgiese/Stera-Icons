import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailBadgeIconFilled = memo(
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
          d="m.375 7.78 7.502 6.002a5 5 0 0 0 6.246 0l5.587-4.47a4.5 4.5 0 0 0 2.29.075V17a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7.499z"
        />
        <path
          fill="currentColor"
          d="M16.969 3a4.5 4.5 0 0 0-.469 2c0 1.266.524 2.408 1.365 3.226l-4.991 3.994a3 3 0 0 1-3.748 0L1.625 6.219l-.013-.01L1.6 6.2.384 5.288A4 4 0 0 1 4 3zM21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
        />
      </svg>
    ))
);
MailBadgeIconFilled.displayName = "MailBadgeIconFilled";
export { MailBadgeIconFilled };
