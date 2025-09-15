import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieFilled = memo(
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
          d="M8.89 1.45a.48.48 0 0 1 .61.469V11.5a3 3 0 0 0 3 3h9.58c.32 0 .559.3.468.608C21.207 19.67 16.995 23 12 23 5.925 23 1 18.075 1 12 1 7.005 4.33 2.79 8.89 1.45"
        />
        <path
          fill="currentColor"
          d="m13.099 1.055.399.048a11 11 0 0 1 6.28 3.119 11 11 0 0 1 3.167 6.68C23.066 12.106 22.075 13 21 13h-8a2 2 0 0 1-2-2V3c0-1.007.785-1.942 1.876-1.955z"
        />
      </svg>
    ))
);
ChartPieFilled.displayName = "ChartPieFilled";
export { ChartPieFilled };
