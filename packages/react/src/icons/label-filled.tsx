import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LabelFilled = memo(
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
          d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7.11a3 3 0 0 1-2.544-1.41L.484 13.06a2 2 0 0 1 0-2.12l4.08-6.53A3 3 0 0 1 7.11 3z"
        />
      </svg>
    ))
);
LabelFilled.displayName = "LabelFilled";
export { LabelFilled };
