import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineDown = memo(
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
          d="M20 20.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM12 2.25a.75.75 0 0 1 .75.75v12.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06l5.72 5.72V3a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ArrowLineDown.displayName = "ArrowLineDown";
export { ArrowLineDown };
