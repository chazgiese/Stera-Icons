import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailboxIconBold = memo(
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
          d="M7.25 10a1 1 0 1 1 0 2h-1.5a1 1 0 1 1 0-2zM18 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V11h-3a1 1 0 1 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 5a5.5 5.5 0 0 1 5.5 5.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6.5A5.5 5.5 0 0 1 6.5 5zm-11 2A3.5 3.5 0 0 0 3 10.5V17a1 1 0 0 0 1 1h6v-7.5A3.5 3.5 0 0 0 6.5 7m4.242 0A5.48 5.48 0 0 1 12 10.5V18h8a1 1 0 0 0 1-1v-6.5A3.5 3.5 0 0 0 17.5 7z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailboxIconBold.displayName = "MailboxIconBold";
export { MailboxIconBold };
