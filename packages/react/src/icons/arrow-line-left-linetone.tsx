import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineLeftIconLinetone = memo(
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
          d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13.293 4.293a1 1 0 1 1 1.414 1.414L9.414 11H21a1 1 0 1 1 0 2H9.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1-.193-.274 1 1 0 0 1-.057-.142l-.013-.05a1 1 0 0 1-.003-.472l.016-.062a1 1 0 0 1 .057-.14 1 1 0 0 1 .193-.274z"
        />
      </svg>
    ))
);
ArrowLineLeftIconLinetone.displayName = "ArrowLineLeftIconLinetone";
export { ArrowLineLeftIconLinetone };
