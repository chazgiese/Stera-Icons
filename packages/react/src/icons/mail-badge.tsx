import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailBadgeIcon = memo(
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
          d="M16.853 3.25c-.197.465-.317.97-.346 1.5H4a2 2 0 0 0-.367.032 1.602 1.602 0 0 0-.68 2.82l6.017 4.813a3.25 3.25 0 0 0 4.06 0l5.02-4.018c.404.35.87.63 1.379.82l-5.461 4.37a4.75 4.75 0 0 1-5.936 0L2.016 8.773a3 3 0 0 1-.266-.242V17A2.25 2.25 0 0 0 4 19.25h14A2.25 2.25 0 0 0 20.25 17V9.437a4.5 4.5 0 0 0 1.5 0V17A3.75 3.75 0 0 1 18 20.75H4A3.75 3.75 0 0 1 .25 17V7a3.75 3.75 0 0 1 3.241-3.716q.048-.007.097-.012l.049-.004q.08-.009.16-.013l.043-.001q.057-.003.113-.004z"
        />
        <path fill="currentColor" d="M21 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
      </svg>
    ))
);
MailBadgeIcon.displayName = "MailBadgeIcon";
export { MailBadgeIcon };
