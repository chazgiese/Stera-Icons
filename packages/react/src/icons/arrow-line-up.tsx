import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineUpIcon = memo(
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
          d="M3.25 3c0 .414.336.75.75.75h16a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75M4.47 13.47a.75.75 0 1 0 1.06 1.06l5.72-5.72V21a.75.75 0 0 0 1.5 0V8.81l5.72 5.72a.75.75 0 1 0 1.06-1.06l-7-7a.75.75 0 0 0-1.06 0z"
        />
      </svg>
    ))
);
ArrowLineUpIcon.displayName = "ArrowLineUpIcon";
export { ArrowLineUpIcon };
