import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftIcon = memo(
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
          d="M16 5.25a.75.75 0 0 1 0 1.5H7.81l10.72 10.72a.75.75 0 0 1-1.06 1.06L6.75 7.81V16a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 6 5.25z"
        />
      </svg>
    ))
);
ArrowUpLeftIcon.displayName = "ArrowUpLeftIcon";
export { ArrowUpLeftIcon };
