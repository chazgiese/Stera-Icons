import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GradientIconFill = memo(
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
          fillRule="evenodd"
          d="M14.6 2.5c1.111 0 1.976 0 2.668.057.697.057 1.265.173 1.775.433a4.5 4.5 0 0 1 1.967 1.967c.26.51.376 1.078.433 1.775.057.692.057 1.557.057 2.668v5.2c0 1.111 0 1.976-.057 2.668-.057.697-.173 1.265-.433 1.775a4.5 4.5 0 0 1-1.967 1.967c-.51.26-1.078.376-1.775.433-.692.057-1.557.057-2.668.057H9.4c-1.111 0-1.976 0-2.668-.057-.697-.057-1.265-.173-1.775-.433a4.5 4.5 0 0 1-1.967-1.967c-.26-.51-.376-1.078-.433-1.775C2.5 16.576 2.5 15.71 2.5 14.6V9.4c0-1.111 0-1.976.057-2.668.057-.697.173-1.265.433-1.775A4.5 4.5 0 0 1 4.957 2.99c.51-.26 1.078-.376 1.775-.433C7.424 2.5 8.29 2.5 9.4 2.5zM7 15.375a1.625 1.625 0 1 0 0 3.25 1.625 1.625 0 0 0 0-3.25m7.467.4a1.225 1.225 0 1 0 0 2.45 1.225 1.225 0 0 0 0-2.45m-3.533-2.7a1.425 1.425 0 1 0 0 2.85 1.425 1.425 0 0 0 0-2.85m6.667.4c-.53 0-.968.403-1.02.92l-.006.105.005.104a1.026 1.026 0 1 0 1.125-1.124zM7 10.375a1.625 1.625 0 1 0 0 3.25 1.625 1.625 0 0 0 0-3.25m7.467.4a1.225 1.225 0 1 0 0 2.45 1.225 1.225 0 0 0 0-2.45m-3.533-2.7a1.425 1.425 0 1 0 0 2.85 1.425 1.425 0 0 0 0-2.85m6.667.4c-.53 0-.968.403-1.02.92l-.006.105.005.104a1.026 1.026 0 1 0 1.125-1.125zM7 5.375a1.625 1.625 0 1 0 0 3.25 1.625 1.625 0 0 0 0-3.25m7.467.4a1.225 1.225 0 1 0 0 2.45 1.225 1.225 0 0 0 0-2.45"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GradientIconFill.displayName = "GradientIconFill";
export { GradientIconFill };
