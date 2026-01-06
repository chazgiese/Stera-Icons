import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpIconFill = memo(
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
          d="M12 4a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 18 12h-5v7a1 1 0 0 1-2 0v-7H6a1 1 0 0 1-.707-1.707l6-6A1 1 0 0 1 12 4"
        />
      </svg>
    ))
);
ArrowUpIconFill.displayName = "ArrowUpIconFill";
export { ArrowUpIconFill };
