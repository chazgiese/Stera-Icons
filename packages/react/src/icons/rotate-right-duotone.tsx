import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateRightIconDuotone = memo(
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
          d="m15.19 4.25.75.75-.75.75H12A7.25 7.25 0 1 0 19.25 13a.75.75 0 0 1 1.5 0A8.75 8.75 0 1 1 12 4.25z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.47.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L15.94 5l-3.47-3.47a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
RotateRightIconDuotone.displayName = "RotateRightIconDuotone";
export { RotateRightIconDuotone };
