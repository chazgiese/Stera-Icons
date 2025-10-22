import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailIconFilled = memo(
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
          d="M23 17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7.499l.375.281 7.502 6.002a5 5 0 0 0 6.246 0l7.501-6.002.376-.282z"
        />
        <path
          fill="currentColor"
          d="M19 3a4 4 0 0 1 3.615 2.288L21.4 6.2l-.012.009-.013.01-7.501 6a3 3 0 0 1-3.748 0l-7.501-6-.013-.01L2.6 6.2l-1.216-.912A4 4 0 0 1 5 3z"
        />
      </svg>
    ))
);
MailIconFilled.displayName = "MailIconFilled";
export { MailIconFilled };
