import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownLeftFilled = memo(
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
          d="M17.293 5.293a1 1 0 1 1 1.414 1.414L11.914 13.5l3.793 3.793A1 1 0 0 1 15 19H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1.707-.707l3.793 3.793z"
        />
      </svg>
    ))
);
ArrowDownLeftFilled.displayName = "ArrowDownLeftFilled";
export { ArrowDownLeftFilled };
