import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BottleIconFilled = memo(
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
          d="M13.5 1a1 1 0 0 1 .13 1.99l.543 4.325a1 1 0 0 0 .21.501l1.21 1.511c.425.532.657 1.193.657 1.874V21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-9.799a3 3 0 0 1 .657-1.874l1.21-1.51c.115-.145.188-.318.211-.502l.54-4.325A1 1 0 0 1 10.5 1z"
        />
      </svg>
    ))
);
BottleIconFilled.displayName = "BottleIconFilled";
export { BottleIconFilled };
