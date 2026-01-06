import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarRowDescIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M19.75 8C20.44 8 21 7.44 21 6.75v-2.5C21 3.56 20.44 3 19.75 3H5v5zM15.75 14.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5v5zM11.75 21c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5v5z" />
        </g>
        <path
          fill="currentColor"
          d="M4 23a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v20a1 1 0 0 0 1 1"
        />
      </svg>
    ))
);
ChartBarRowDescIconFillDuotone.displayName = "ChartBarRowDescIconFillDuotone";
export { ChartBarRowDescIconFillDuotone };
