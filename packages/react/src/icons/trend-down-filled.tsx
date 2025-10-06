import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendDownFilled = memo(
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
          d="M22.5 20a1 1 0 0 0 .427-.097l.048-.023A1 1 0 0 0 23.5 19v-6a1 1 0 0 0-1.707-.707L19.5 14.586l-5.793-5.793a1 1 0 0 0-1.414 0L9.5 11.586 2.207 4.293A1 1 0 1 0 .793 5.707l8 8 .073.066a1 1 0 0 0 1.341-.066L13 10.914 18.086 16l-2.293 2.293A1 1 0 0 0 16.5 20z"
        />
      </svg>
    ))
);
TrendDownFilled.displayName = "TrendDownFilled";
export { TrendDownFilled };
