import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CliIconFilled = memo(
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
          d="M1.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.121l5.938-5.94-5.939-5.938a1.5 1.5 0 0 1 0-2.121M22 17.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z"
        />
        <path
          fill="currentColor"
          d="M1.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.122l5.938-5.94L1.939 6.06a1.5 1.5 0 0 1 0-2.12M22 17.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
CliIconFilled.displayName = "CliIconFilled";
export { CliIconFilled };
