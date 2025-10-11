import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsUpDownIcon = memo(
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
          d="M17 3.25a.75.75 0 0 1 .75.75v16.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-4 4a.75.75 0 0 1-1.004.052l-.056-.052-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4a.75.75 0 0 1 .75-.75M7 2.25c.199 0 .39.08.53.22l4 4a.75.75 0 1 1-1.06 1.06L7.75 4.81V21a.75.75 0 0 1-1.5 0V4.81L3.53 7.53a.75.75 0 1 1-1.06-1.06l4-4 .114-.094A.75.75 0 0 1 7 2.25"
        />
      </svg>
    ))
);
ArrowsUpDownIcon.displayName = "ArrowsUpDownIcon";
export { ArrowsUpDownIcon };
