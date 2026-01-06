import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateLeftIconDuotone = memo(
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
          d="M12 4.25A8.75 8.75 0 1 1 3.25 13a.75.75 0 0 1 1.5 0A7.25 7.25 0 1 0 12 5.75H8.81L8.06 5l.75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.47.47a.75.75 0 1 1 1.06 1.06L8.06 5l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06z"
        />
      </svg>
    ))
);
RotateLeftIconDuotone.displayName = "RotateLeftIconDuotone";
export { RotateLeftIconDuotone };
