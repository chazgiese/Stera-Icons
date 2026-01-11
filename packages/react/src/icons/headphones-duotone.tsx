import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HeadphonesIconDuotone = memo(
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
          d="M12 1.25c3.233 0 6.133 1.428 8.103 3.686 1.728 1.98 2.236 4.413 2.2 6.874-.034 2.448-.607 5.014-1.12 7.32l-.006.033a.75.75 0 0 1-.895.57l-.061-.018.578-2.6a2.74 2.74 0 0 0-.33-2.01c.188-1.123.32-2.236.336-3.316.032-2.25-.435-4.265-1.832-5.867A9.23 9.23 0 0 0 12 2.75a9.23 9.23 0 0 0-6.972 3.172C3.63 7.524 3.165 9.538 3.196 11.789c.016 1.08.145 2.194.333 3.316a2.74 2.74 0 0 0-.328 2.01l.578 2.6q-.03.01-.06.017a.75.75 0 0 1-.896-.569l-.006-.032c-.513-2.307-1.086-4.873-1.12-7.32-.035-2.462.472-4.894 2.2-6.875A10.73 10.73 0 0 1 12 1.25"
          opacity={0.4}
        />
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M3.934 16.953a2 2 0 0 1 3.904-.868l.65 2.929a2 2 0 1 1-3.904.867zM20.066 16.953a2 2 0 0 0-3.905-.868l-.65 2.929a2 2 0 1 0 3.905.867z"
        />
      </svg>
    ))
);
HeadphonesIconDuotone.displayName = "HeadphonesIconDuotone";
export { HeadphonesIconDuotone };
