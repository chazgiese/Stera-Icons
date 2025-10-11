import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsExpandIconFilled = memo(
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
          d="M9 3a1 1 0 0 1 .707 1.707L7.914 6.5 12 10.586 16.086 6.5l-1.793-1.793A1 1 0 0 1 15 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1.707.707L17.5 7.914 13.414 12l4.086 4.086 1.793-1.793A1 1 0 0 1 21 15v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-.707-1.707l1.793-1.793L12 13.414 7.914 17.5l1.793 1.793A1 1 0 0 1 9 21H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1.707-.707L6.5 16.086 10.586 12 6.5 7.914 4.707 9.707A1 1 0 0 1 3 9V4a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ArrowsExpandIconFilled.displayName = "ArrowsExpandIconFilled";
export { ArrowsExpandIconFilled };
