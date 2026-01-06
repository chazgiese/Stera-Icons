import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailBadgeIconDuotone = memo(
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
        <path fill="currentColor" d="M24 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        <path
          fill="currentColor"
          d="M16.853 3.25c-.197.465-.317.97-.346 1.5H4.985c-1.124 0-2.05.83-2.209 1.91l7.194 5.755a3.25 3.25 0 0 0 4.06 0l4.537-3.63c.48.308 1.023.529 1.605.637l-5.204 4.165a4.75 4.75 0 0 1-5.936 0L1.543 7.595a.78.78 0 0 1-.293-.61A3.736 3.736 0 0 1 4.985 3.25z"
        />
        <path
          fill="currentColor"
          d="M1.25 6.99c.001.235.11.458.293.605l1.207.965V17A2.25 2.25 0 0 0 5 19.25h14A2.25 2.25 0 0 0 21.25 17V9.492a4.5 4.5 0 0 0 1.5-.346V17A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17V6.99"
          opacity={0.4}
        />
      </svg>
    ))
);
MailBadgeIconDuotone.displayName = "MailBadgeIconDuotone";
export { MailBadgeIconDuotone };
