import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserCircleIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 6a5 5 0 0 1 3.398 8.665 9.03 9.03 0 0 1 4.476 3.974 1 1 0 0 1 .126.485v.018a1 1 0 0 1-.3.713A10.97 10.97 0 0 1 12 23c-2.998 0-5.717-1.2-7.7-3.145a1 1 0 0 1-.3-.713v-.018a1 1 0 0 1 .126-.485 9.03 9.03 0 0 1 4.475-3.974A5 5 0 0 1 12 6"
        />
      </svg>
    ))
);
UserCircleIconFilltone.displayName = "UserCircleIconFilltone";
export { UserCircleIconFilltone };
