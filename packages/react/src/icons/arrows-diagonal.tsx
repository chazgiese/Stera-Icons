import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsDiagonal = memo(
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
          d="M9.47 13.47a.75.75 0 1 1 1.06 1.06l-5.72 5.72H9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19zM21 2.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.81l-5.72 5.72a.75.75 0 1 1-1.06-1.06l5.72-5.72H15a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ArrowsDiagonal.displayName = "ArrowsDiagonal";
export { ArrowsDiagonal };
