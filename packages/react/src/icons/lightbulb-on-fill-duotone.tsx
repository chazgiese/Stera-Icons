import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbOnIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M2.34 8.412a1 1 0 0 1 1.225-.707l.966.259a1 1 0 1 1-.517 1.931l-.966-.258a1 1 0 0 1-.707-1.225M20.434 7.705a1 1 0 1 1 .518 1.932l-.966.258a1 1 0 0 1-.517-1.931zM4.93 3.929a1 1 0 0 1 1.414 0l.707.708A1 1 0 0 1 5.637 6.05l-.707-.707a1 1 0 0 1 0-1.415M17.658 3.929a1 1 0 0 1 1.414 1.415l-.707.707a1 1 0 0 1-1.414-1.414zM9.411 1.34a1 1 0 0 1 1.225.708l.258.966a1 1 0 1 1-1.931.517l-.259-.966a1 1 0 0 1 .707-1.224M13.364 2.048a1 1 0 0 1 1.932.517l-.259.966a1 1 0 1 1-1.932-.517z" />
        </g>
        <path
          fill="currentColor"
          d="M15.249 19c0 .976-.51 1.831-1.277 2.32a1.998 1.998 0 0 1-3.944 0A2.75 2.75 0 0 1 8.75 19v-.25h6.5zM12 5.25a5.75 5.75 0 0 1 4.791 8.93c-.737 1.11-1.379 2.063-1.515 3.07H8.722c-.136-1.007-.776-1.961-1.513-3.07A5.75 5.75 0 0 1 12 5.25"
        />
      </svg>
    ))
);
LightbulbOnIconFillDuotone.displayName = "LightbulbOnIconFillDuotone";
export { LightbulbOnIconFillDuotone };
