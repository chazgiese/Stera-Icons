import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftTopIcon = memo(
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
          d="M5.47 2.47a.75.75 0 1 1 1.06 1.06L3.81 6.25H15.5a7.25 7.25 0 1 1 0 14.5H8a.75.75 0 0 1 0-1.5h7.5a5.75 5.75 0 1 0 0-11.5H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.8.8 0 0 1-.117-.157.74.74 0 0 1-.097-.469l.006-.034q.003-.02.01-.041a1 1 0 0 1 .027-.09q.008-.026.02-.05a1 1 0 0 1 .057-.105l.007-.008a1 1 0 0 1 .087-.106z"
        />
      </svg>
    ))
);
ArrowULeftTopIcon.displayName = "ArrowULeftTopIcon";
export { ArrowULeftTopIcon };
