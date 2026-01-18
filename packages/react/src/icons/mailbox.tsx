import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailboxIcon = memo(
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
          d="M7.25 10.25a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5zM18 9.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-.75H14a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 5.25c2.9 0 5.25 2.35 5.25 5.25V17A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17v-6.5c0-2.9 2.35-5.25 5.25-5.25zm-11 1.5a3.75 3.75 0 0 0-3.75 3.75V17c0 .69.56 1.25 1.25 1.25h6.25V10.5A3.75 3.75 0 0 0 6.5 6.75m3.672 0a5.23 5.23 0 0 1 1.578 3.75v7.75H20c.69 0 1.25-.56 1.25-1.25v-6.5a3.75 3.75 0 0 0-3.75-3.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailboxIcon.displayName = "MailboxIcon";
export { MailboxIcon };
