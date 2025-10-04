import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarFilled = memo(
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
          d="M3 7.5A1.5 1.5 0 0 1 4.5 9v12a1.5 1.5 0 0 1-3 0V9A1.5 1.5 0 0 1 3 7.5M9 1.5A1.5 1.5 0 0 1 10.5 3v18l-.008.153a1.5 1.5 0 0 1-2.984 0L7.5 21V3A1.5 1.5 0 0 1 9 1.5M15 9.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-3 0V11A1.5 1.5 0 0 1 15 9.5M21 5.5A1.5 1.5 0 0 1 22.5 7v14a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 21 5.5"
        />
      </svg>
    ))
);
ChartBarFilled.displayName = "ChartBarFilled";
export { ChartBarFilled };
