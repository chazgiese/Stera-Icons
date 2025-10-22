import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineRightIcon = memo(
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
          d="M21 3.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-.75-.75M10.53 4.47a.75.75 0 1 0-1.06 1.06l5.72 5.72H3a.75.75 0 0 0 0 1.5h12.19l-5.72 5.72a.75.75 0 1 0 1.06 1.06l7-7a.75.75 0 0 0 0-1.06z"
        />
      </svg>
    ))
);
ArrowLineRightIcon.displayName = "ArrowLineRightIcon";
export { ArrowLineRightIcon };
