import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleNotchIconDuotone = memo(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M19.071 4.929a10 10 0 1 1-14.142 0"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"
          opacity={0.4}
        />
      </svg>
    ))
);
CircleNotchIconDuotone.displayName = "CircleNotchIconDuotone";
export { CircleNotchIconDuotone };
