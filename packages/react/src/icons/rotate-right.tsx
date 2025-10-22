import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateRightIcon = memo(
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
          d="M13.53.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H12A8.75 8.75 0 1 0 20.75 13a.75.75 0 0 0-1.5 0A7.25 7.25 0 1 1 12 5.75h3.19l-2.72 2.72a.75.75 0 0 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06z"
        />
      </svg>
    ))
);
RotateRightIcon.displayName = "RotateRightIcon";
export { RotateRightIcon };
