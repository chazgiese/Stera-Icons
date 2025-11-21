import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XIconFilled = memo(
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
          d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12L14.121 12l5.94 5.94a1.5 1.5 0 1 1-2.122 2.12L12 14.122l-5.939 5.94a1.5 1.5 0 0 1-2.12-2.121L9.878 12l-5.94-5.94A1.5 1.5 0 1 1 6.06 3.94L12 9.879z"
        />
      </svg>
    ))
);
XIconFilled.displayName = "XIconFilled";
export { XIconFilled };
