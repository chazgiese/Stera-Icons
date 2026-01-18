import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailboxIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M17.5 5.25c2.9 0 5.25 2.35 5.25 5.25V17A2.75 2.75 0 0 1 20 19.75h-9a.75.75 0 0 0 .75-.75v-.75H20c.69 0 1.25-.56 1.25-1.25v-6.5a3.75 3.75 0 0 0-3.75-3.75h-7.328A5.23 5.23 0 0 0 6.5 5.25zM7.25 10.25a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.5 5.25c2.9 0 5.25 2.35 5.25 5.25V19a.75.75 0 0 1-.75.75H4A2.75 2.75 0 0 1 1.25 17v-6.5c0-2.9 2.35-5.25 5.25-5.25m0 1.5a3.75 3.75 0 0 0-3.75 3.75V17c0 .69.56 1.25 1.25 1.25h6.25V10.5A3.75 3.75 0 0 0 6.5 6.75"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18 9.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-.75H14a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
MailboxIconDuotone.displayName = "MailboxIconDuotone";
export { MailboxIconDuotone };
